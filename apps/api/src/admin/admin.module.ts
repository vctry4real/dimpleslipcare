import { Module } from '@nestjs/common'
import { Controller, Get, Patch, Body, Param, UseGuards } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import { IsIn } from 'class-validator'
import { PrismaService } from '../prisma/prisma.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { RolesGuard, Roles } from '../common/guards/roles.guard'

class UpdateOrderStatusDto {
  @IsIn(['CONFIRMED', 'PACKED', 'SHIPPED', 'DELIVERED', 'CANCELLED'])
  status: string
}

@Injectable()
class AdminService {
  constructor(private prisma: PrismaService) {}

  getDashboard() {
    return Promise.all([
      this.prisma.order.count(),
      this.prisma.order.count({ where: { paymentStatus: 'PAID' } }),
      this.prisma.user.count({ where: { role: 'CUSTOMER' } }),
      this.prisma.order.aggregate({ _sum: { total: true }, where: { paymentStatus: 'PAID' } }),
    ]).then(([totalOrders, paidOrders, customers, revenue]) => ({
      totalOrders,
      paidOrders,
      customers,
      totalRevenue: revenue._sum.total ?? 0,
    }))
  }

  getOrders() {
    return this.prisma.order.findMany({
      include: { user: { select: { email: true, firstName: true, lastName: true } }, address: true },
      orderBy: { createdAt: 'desc' },
      take: 50,
    })
  }

  updateOrderStatus(id: string, status: string) {
    return this.prisma.order.update({
      where: { id },
      data: { status: status as any },
    })
  }

  getPendingReviews() {
    return this.prisma.review.findMany({
      where: { verified: false },
      include: {
        user: { select: { firstName: true, email: true } },
        product: { select: { name: true } },
      },
      orderBy: { createdAt: 'desc' },
    })
  }

  approveReview(id: string) {
    return this.prisma.review.update({ where: { id }, data: { verified: true } })
  }
}

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('admin')
class AdminController {
  constructor(private admin: AdminService) {}

  @Get('dashboard') getDashboard() { return this.admin.getDashboard() }
  @Get('orders')    getOrders()    { return this.admin.getOrders() }

  @Patch('orders/:id/status')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateOrderStatusDto) {
    return this.admin.updateOrderStatus(id, dto.status)
  }

  @Get('reviews/pending') getPendingReviews() { return this.admin.getPendingReviews() }

  @Patch('reviews/:id/approve')
  approveReview(@Param('id') id: string) { return this.admin.approveReview(id) }
}

@Module({
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
