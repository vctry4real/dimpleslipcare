import { Module } from '@nestjs/common'
import { CategoriesService } from './categories.service'
import { Controller, Get } from '@nestjs/common'

@Controller('categories')
class CategoriesController {
  constructor(private categories: CategoriesService) {}
  @Get() findAll() { return this.categories.findAll() }
}

@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController],
  exports: [CategoriesService],
})
export class CategoriesModule {}
