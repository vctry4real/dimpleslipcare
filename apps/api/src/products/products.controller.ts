import { Controller, Get, Param, Query } from '@nestjs/common'
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
  constructor(private products: ProductsService) {}

  @Get()
  findAll(@Query('category') category?: string) {
    return this.products.findAll(category)
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.products.findOne(slug)
  }
}
