import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { InventoryService } from '../inventory/inventory.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { SHIPPING_FEES } from '@dimples/types'

const ORDER_COUNTER_KEY = 'order_counter'

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService,
    private inventory: InventoryService,
  ) {}

  async create(userId: string, dto: CreateOrderDto) {
    // 1. Load cart
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
      include: { items: { include: { product: { include: { inventory: true } } } } },
    })
    if (!cart?.items.length) throw new BadRequestException('Cart is empty')

    // 2. Validate address belongs to user
    const address = await this.prisma.address.findFirst({
      where: { id: dto.addressId, userId },
    })
    if (!address) throw new NotFoundException('Address not found')

    // 3. Check stock & build order items
    for (const item of cart.items) {
      await this.inventory.assertAvailable(item.productId, item.quantity)
    }

    // 4. Calculate totals
    const subtotal    = cart.items.reduce((s, i) => s + i.product.price * i.quantity, 0)
    const shippingFee = SHIPPING_FEES[dto.shippingMethod]
    const total       = subtotal + shippingFee

    // 5. Create order + reserve inventory in one transaction
    const order = await this.prisma.$transaction(async (tx) => {
      const orderNumber = await this.generateOrderNumber()

      const created = await tx.order.create({
        data: {
          orderNumber,
          userId,
          addressId: dto.addressId,
          subtotal,
          shippingFee,
          total,
          notes: dto.notes,
          items: {
            create: cart.items.map(i => ({
              productId: i.productId,
              quantity:  i.quantity,
              unitPrice: i.product.price,
              total:     i.product.price * i.quantity,
            })),
          },
        },
        include: { items: true },
      })

      // Reserve inventory
      for (const item of cart.items) {
        await tx.inventory.update({
          where: { productId: item.productId },
          data: { reserved: { increment: item.quantity } },
        })
      }

      // Clear cart
      await tx.cartItem.deleteMany({ where: { cartId: cart.id } })

      return created
    })

    return order
  }

  async findAll(userId: string) {
    return this.prisma.order.findMany({
      where: { userId },
      include: { items: { include: { product: { select: { name: true, slug: true } } } } },
      orderBy: { createdAt: 'desc' },
    })
  }

  async findOne(id: string, userId: string) {
    const order = await this.prisma.order.findFirst({
      where: { id, userId },
      include: {
        items: { include: { product: { select: { name: true, slug: true } } } },
        address: true,
        payment: true,
      },
    })
    if (!order) throw new NotFoundException('Order not found')
    return order
  }

  private async generateOrderNumber(): Promise<string> {
    const year = new Date().getFullYear()
    // Use a DB sequence via a simple count-based approach
    const count = await this.prisma.order.count()
    const seq   = String(count + 1).padStart(4, '0')
    return `DMP-${year}-${seq}`
  }
}
