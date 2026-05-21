import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as nodemailer from 'nodemailer'
import type { Order, OrderItem, User, Address } from '@prisma/client'

type OrderWithDetails = Order & {
  user: User
  address: Address
  items: (OrderItem & { product: { name: string } })[]
}

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name)
  private transporter: nodemailer.Transporter

  constructor(private config: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host:   config.get('SMTP_HOST'),
      port:   config.get<number>('SMTP_PORT', 465),
      secure: config.get<number>('SMTP_PORT', 465) === 465,
      auth: {
        user: config.get('SMTP_USER'),
        pass: config.get('SMTP_PASS'),
      },
    })
  }

  async sendOrderConfirmation(order: OrderWithDetails) {
    const itemsHtml = order.items
      .map(
        i => `<tr>
          <td>${i.product.name}</td>
          <td style="text-align:center">${i.quantity}</td>
          <td style="text-align:right">₦${(i.unitPrice / 100).toLocaleString()}</td>
        </tr>`,
      )
      .join('')

    const html = `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
        <h2 style="color:#c46b82">Order confirmed — ${order.orderNumber}</h2>
        <p>Hi ${order.user.firstName}, your order is confirmed and we're getting it ready.</p>
        <table width="100%" cellpadding="8" style="border-collapse:collapse;margin:16px 0">
          <thead>
            <tr style="background:#fce8ee">
              <th align="left">Product</th>
              <th align="center">Qty</th>
              <th align="right">Price</th>
            </tr>
          </thead>
          <tbody>${itemsHtml}</tbody>
          <tfoot>
            <tr>
              <td colspan="2"><strong>Total</strong></td>
              <td align="right"><strong>₦${(order.total / 100).toLocaleString()}</strong></td>
            </tr>
          </tfoot>
        </table>
        <p><strong>Delivering to:</strong><br>${order.address.line1}, ${order.address.city}, ${order.address.state}</p>
        <p style="color:#888;font-size:12px">
          Questions? Reply to this email or visit dimpleslipcare.com/contact
        </p>
      </div>
    `

    try {
      await this.transporter.sendMail({
        from:    this.config.get('EMAIL_FROM'),
        to:      order.user.email,
        subject: `Your Dimples order is confirmed — ${order.orderNumber}`,
        html,
      })
    } catch (err) {
      this.logger.error('sendOrderConfirmation failed', err)
    }
  }
}
