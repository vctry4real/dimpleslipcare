import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, UseGuards } from '@nestjs/common'
import { CartService } from './cart.service'
import { AddToCartDto } from './dto/add-to-cart.dto'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CurrentUser } from '../common/decorators/current-user.decorator'

@UseGuards(JwtAuthGuard)
@Controller('cart')
export class CartController {
  constructor(private cart: CartService) {}

  @Get()
  getCart(@CurrentUser() user: { id: string }) {
    return this.cart.getCart(user.id)
  }

  @Post('items')
  addItem(@Body() dto: AddToCartDto, @CurrentUser() user: { id: string }) {
    return this.cart.addItem(user.id, dto)
  }

  @Patch('items/:productId')
  updateItem(
    @Param('productId') productId: string,
    @Body('quantity', ParseIntPipe) quantity: number,
    @CurrentUser() user: { id: string },
  ) {
    return this.cart.updateItem(user.id, productId, quantity)
  }

  @Delete()
  clearCart(@CurrentUser() user: { id: string }) {
    return this.cart.clearCart(user.id)
  }
}
