import { Module } from '@nestjs/common'
import { Controller, Get } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import { SHIPPING_FEES } from '@dimples/types'

@Injectable()
class ShippingService {
  getOptions() {
    return [
      { id: 'standard', label: 'Standard nationwide',  fee: SHIPPING_FEES.standard, estimatedDays: '3–5' },
      { id: 'express',  label: 'Express Lagos (1–2 days)', fee: SHIPPING_FEES.express,  estimatedDays: '1–2' },
      { id: 'pickup',   label: 'Studio pickup (free)',  fee: SHIPPING_FEES.pickup,   estimatedDays: '0' },
    ]
  }
}

@Controller('shipping')
class ShippingController {
  constructor(private shipping: ShippingService) {}
  @Get('options') getOptions() { return this.shipping.getOptions() }
}

@Module({
  providers: [ShippingService],
  controllers: [ShippingController],
  exports: [ShippingService],
})
export class ShippingModule {}
