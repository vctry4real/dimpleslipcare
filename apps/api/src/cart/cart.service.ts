import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { InventoryService } from '../inventory/inventory.service'
import { AddToCartDto } from './dto/add-to-cart.dto'

@Injectable()
export class CartService {
  constructor(
    private prisma: PrismaService,
    private inventory: InventoryService,
  ) {}

  async getCart(userId: string) {
    return this.prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: { product: { include: { images: { where: { isPrimary: true }, take: 1 } } } },
        },
      },
    })
  }

  async addItem(userId: string, dto: AddToCartDto) {
    await this.inventory.assertAvailable(dto.productId, dto.quantity)

    // Get or create the user's cart
    let cart = await this.prisma.cart.findUnique({ where: { userId } })
    if (!cart) {
      cart = await this.prisma.cart.create({ data: { userId } })
    }

    await this.prisma.cartItem.upsert({
      where: { cartId_productId: { cartId: cart.id, productId: dto.productId } },
      create: { cartId: cart.id, productId: dto.productId, quantity: dto.quantity },
      update: { quantity: { increment: dto.quantity } },
    })

    return this.getCart(userId)
  }

  async updateItem(userId: string, productId: string, quantity: number) {
    const cart = await this.prisma.cart.findUnique({ where: { userId } })
    if (!cart) throw new NotFoundException('Cart not found')

    if (quantity <= 0) {
      await this.prisma.cartItem.deleteMany({
        where: { cartId: cart.id, productId },
      })
    } else {
      await this.inventory.assertAvailable(productId, quantity)
      await this.prisma.cartItem.update({
        where: { cartId_productId: { cartId: cart.id, productId } },
        data: { quantity },
      })
    }

    return this.getCart(userId)
  }

  async clearCart(userId: string) {
    const cart = await this.prisma.cart.findUnique({ where: { userId } })
    if (cart) {
      await this.prisma.cartItem.deleteMany({ where: { cartId: cart.id } })
    }
    return { cleared: true }
  }
}
