import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  findAll(category?: string) {
    return this.prisma.product.findMany({
      where: {
        isActive: true,
        ...(category ? { category: { slug: category } } : {}),
      },
      include: {
        images: { where: { isPrimary: true }, take: 1 },
        inventory: { select: { quantity: true, reserved: true } },
        category: { select: { name: true, slug: true } },
      },
      orderBy: { createdAt: 'asc' },
    })
  }

  async findOne(slug: string) {
    const product = await this.prisma.product.findUnique({
      where: { slug },
      include: {
        images: true,
        inventory: true,
        category: true,
        reviews: {
          where: { verified: true },
          include: { user: { select: { firstName: true, lastName: true } } },
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
      },
    })
    if (!product) throw new NotFoundException('Product not found')
    return product
  }
}
