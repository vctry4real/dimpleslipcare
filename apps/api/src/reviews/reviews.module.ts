import { Module } from '@nestjs/common'
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common'
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common'
import { IsInt, IsString, IsOptional, Min, Max } from 'class-validator'
import { PrismaService } from '../prisma/prisma.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CurrentUser } from '../common/decorators/current-user.decorator'

class CreateReviewDto {
  @IsInt() @Min(1) @Max(5) rating: number
  @IsOptional() @IsString() body?: string
}

@Injectable()
class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, productSlug: string, dto: CreateReviewDto) {
    const product = await this.prisma.product.findUnique({ where: { slug: productSlug } })
    if (!product) throw new NotFoundException('Product not found')

    const existing = await this.prisma.review.findFirst({
      where: { userId, productId: product.id },
    })
    if (existing) throw new BadRequestException('You have already reviewed this product')

    return this.prisma.review.create({
      data: { userId, productId: product.id, rating: dto.rating, body: dto.body },
    })
  }

  findByProduct(slug: string) {
    return this.prisma.review.findMany({
      where: { product: { slug }, verified: true },
      include: { user: { select: { firstName: true } } },
      orderBy: { createdAt: 'desc' },
    })
  }
}

@Controller('products/:slug/reviews')
class ReviewsController {
  constructor(private reviews: ReviewsService) {}

  @Get()
  findAll(@Param('slug') slug: string) {
    return this.reviews.findByProduct(slug)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Param('slug') slug: string,
    @Body() dto: CreateReviewDto,
    @CurrentUser() user: { id: string },
  ) {
    return this.reviews.create(user.id, slug, dto)
  }
}

@Module({
  providers: [ReviewsService],
  controllers: [ReviewsController],
})
export class ReviewsModule {}
