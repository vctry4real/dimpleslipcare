import { IsString, IsIn, IsOptional, IsInt, Min } from 'class-validator'

export class CreateOrderDto {
  @IsString()
  addressId: string

  @IsIn(['standard', 'express', 'pickup'])
  shippingMethod: 'standard' | 'express' | 'pickup'

  @IsOptional()
  @IsString()
  notes?: string

  @IsOptional()
  @IsInt()
  @Min(0)
  redeemPoints?: number
}
