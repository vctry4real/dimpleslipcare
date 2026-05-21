import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true, email: true, firstName: true, lastName: true,
        phone: true, role: true, emailVerified: true, createdAt: true,
        loyalty: { select: { balance: true } },
      },
    })
    if (!user) throw new NotFoundException('User not found')
    return user
  }

  async updateProfile(userId: string, data: { firstName?: string; lastName?: string; phone?: string }) {
    return this.prisma.user.update({
      where: { id: userId },
      data,
      select: { id: true, email: true, firstName: true, lastName: true, phone: true },
    })
  }

  async getAddresses(userId: string) {
    return this.prisma.address.findMany({
      where: { userId },
      orderBy: [{ isDefault: 'desc' }, { id: 'asc' }],
    })
  }

  async createAddress(userId: string, data: {
    label: string; recipientName: string; line1: string;
    line2?: string; city: string; state: string; phone: string; isDefault?: boolean
  }) {
    if (data.isDefault) {
      await this.prisma.address.updateMany({
        where: { userId },
        data: { isDefault: false },
      })
    }
    return this.prisma.address.create({ data: { ...data, userId } })
  }

  async deleteAddress(userId: string, addressId: string) {
    const addr = await this.prisma.address.findFirst({ where: { id: addressId, userId } })
    if (!addr) throw new NotFoundException('Address not found')
    await this.prisma.address.delete({ where: { id: addressId } })
    return { deleted: true }
  }
}
