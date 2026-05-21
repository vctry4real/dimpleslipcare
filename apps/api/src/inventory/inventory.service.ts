import { Injectable, BadRequestException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  async assertAvailable(productId: string, quantity: number) {
    const inv = await this.prisma.inventory.findUnique({ where: { productId } })
    if (!inv) throw new BadRequestException(`Product ${productId} has no inventory record`)

    const available = inv.quantity - inv.reserved
    if (available < quantity) {
      throw new BadRequestException(
        `Only ${available} unit(s) available for product ${productId}`,
      )
    }
  }

  async getStock(productId: string) {
    const inv = await this.prisma.inventory.findUnique({ where: { productId } })
    if (!inv) return { quantity: 0, reserved: 0, available: 0 }
    return {
      quantity:  inv.quantity,
      reserved:  inv.reserved,
      available: inv.quantity - inv.reserved,
    }
  }
}
