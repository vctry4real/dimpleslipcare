import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Logger,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { HttpService } from '@nestjs/axios'
import { createHmac, timingSafeEqual } from 'crypto'
import { firstValueFrom } from 'rxjs'
import { v4 as uuidv4 } from 'uuid'
import { PrismaService } from '../prisma/prisma.service'
import { NotificationsService } from '../notifications/notifications.service'
import { InventoryService } from '../inventory/inventory.service'
import { InitializePaymentDto } from './dto/initialize-payment.dto'
import type { PaystackChargeEvent } from '@dimples/types'

@Injectable()
export class PaymentsService {
  private readonly logger = new Logger(PaymentsService.name)
  private readonly paystackBase = 'https://api.paystack.co'

  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private http: HttpService,
    private notifications: NotificationsService,
    private inventory: InventoryService,
  ) {}

  /**
   * Step 1 — Called by the frontend after creating an order.
   * Returns the accessCode and reference for the Paystack inline popup.
   */
  async initialize(dto: InitializePaymentDto, userId: string) {
    const order = await this.prisma.order.findFirst({
      where: { id: dto.orderId, userId },
      include: { user: true },
    })
    if (!order) throw new NotFoundException('Order not found')
    if (order.paymentStatus === 'PAID') {
      throw new BadRequestException('Order already paid')
    }

    const reference = `DMPL-${uuidv4().replace(/-/g, '').slice(0, 16).toUpperCase()}`

    const payload = {
      email: order.user.email,
      amount: order.total,   // already in kobo
      reference,
      currency: 'NGN',
      metadata: {
        orderId: order.id,
        orderNumber: order.orderNumber,
        userId,
        cancel_action: `${this.config.get('FRONTEND_URL')}/checkout?cancelled=1`,
      },
      callback_url: `${this.config.get('FRONTEND_URL')}/thank-you`,
    }

    const { data } = await firstValueFrom(
      this.http.post(`${this.paystackBase}/transaction/initialize`, payload, {
        headers: this.paystackHeaders(),
      }),
    )

    // Persist the payment record immediately
    await this.prisma.payment.create({
      data: {
        orderId: order.id,
        paystackRef: reference,
        amount: order.total,
        status: 'PENDING',
      },
    })

    return {
      reference,
      accessCode:       data.data.access_code,
      authorizationUrl: data.data.authorization_url,
    }
  }

  /**
   * Step 2 — Paystack webhook (charge.success).
   * Must be idempotent — uses WebhookEvent table to deduplicate.
   */
  async handleWebhook(rawBody: Buffer, signature: string) {
    this.verifySignature(rawBody, signature)

    const event: PaystackChargeEvent = JSON.parse(rawBody.toString())
    if (event.event !== 'charge.success') return { received: true }

    const eventId = String(event.data.id)

    // Idempotency check
    const existing = await this.prisma.webhookEvent.findUnique({
      where: { eventId },
    })
    if (existing?.processed) {
      this.logger.log(`Webhook ${eventId} already processed — skipping`)
      return { received: true }
    }

    // Store the event before processing (even if processing fails, we won't double-process)
    await this.prisma.webhookEvent.upsert({
      where: { eventId },
      create: { eventId, eventType: event.event, payload: event as any },
      update: {},
    })

    await this.processChargeSuccess(event)

    await this.prisma.webhookEvent.update({
      where: { eventId },
      data: { processed: true },
    })

    return { received: true }
  }

  // ─── Private ───────────────────────────────────────────────────────────────

  private async processChargeSuccess(event: PaystackChargeEvent) {
    const { reference, amount, channel, paid_at, metadata } = event.data

    // Use a transaction: update payment + order + inventory atomically
    await this.prisma.$transaction(async (tx) => {
      const payment = await tx.payment.findUnique({
        where: { paystackRef: reference },
        include: { order: { include: { items: true } } },
      })

      if (!payment) {
        this.logger.warn(`Payment not found for ref ${reference}`)
        return
      }

      if (payment.status === 'PAID') return // already handled

      // Update payment
      await tx.payment.update({
        where: { id: payment.id },
        data: {
          status: 'PAID',
          paystackTxId: String(event.data.id),
          channel: channel ?? null,
          paidAt: new Date(paid_at),
          metadata: event.data as any,
        },
      })

      // Update order
      await tx.order.update({
        where: { id: payment.orderId },
        data: {
          paymentStatus: 'PAID',
          status: 'CONFIRMED',
        },
      })

      // Deduct inventory (reserved → sold)
      for (const item of payment.order.items) {
        await tx.inventory.update({
          where: { productId: item.productId },
          data: {
            quantity: { decrement: item.quantity },
            reserved: { decrement: item.quantity },
          },
        })
      }

      // Credit loyalty points (1 pt per ₦100 spent)
      const pointsEarned = Math.floor(amount / 10000) // kobo / 10000 = 1pt per ₦100
      if (pointsEarned > 0) {
        await tx.loyaltyPoints.update({
          where: { userId: metadata.userId },
          data: {
            balance: { increment: pointsEarned },
            history: {
              create: {
                points: pointsEarned,
                description: `Order ${payment.order.orderNumber}`,
              },
            },
          },
        })
      }
    })

    // Send order confirmation email (outside the DB transaction — network call)
    try {
      const order = await this.prisma.order.findUnique({
        where: { id: metadata.orderId },
        include: { user: true, items: { include: { product: true } }, address: true },
      })
      if (order) await this.notifications.sendOrderConfirmation(order as any)
    } catch (err) {
      this.logger.error('Failed to send order confirmation email', err)
    }
  }

  private verifySignature(rawBody: Buffer, signature: string) {
    const secret = this.config.getOrThrow<string>('PAYSTACK_WEBHOOK_SECRET')
    const hash = createHmac('sha512', secret).update(rawBody).digest('hex')
    const hashBuf = Buffer.from(hash)
    const sigBuf  = Buffer.from(signature)

    if (
      hashBuf.length !== sigBuf.length ||
      !timingSafeEqual(hashBuf, sigBuf)
    ) {
      throw new BadRequestException('Invalid webhook signature')
    }
  }

  private paystackHeaders() {
    return {
      Authorization: `Bearer ${this.config.getOrThrow('PAYSTACK_SECRET_KEY')}`,
      'Content-Type': 'application/json',
    }
  }
}
