import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CurrentUser } from '../common/decorators/current-user.decorator'
import { IsString, IsOptional } from 'class-validator'

class UpdateProfileDto {
  @IsOptional() @IsString() firstName?: string
  @IsOptional() @IsString() lastName?: string
  @IsOptional() @IsString() phone?: string
}

class CreateAddressDto {
  @IsString() label: string
  @IsString() recipientName: string
  @IsString() line1: string
  @IsOptional() @IsString() line2?: string
  @IsString() city: string
  @IsString() state: string
  @IsString() phone: string
  @IsOptional() isDefault?: boolean
}

@UseGuards(JwtAuthGuard)
@Controller('users/me')
class UsersController {
  constructor(private users: UsersService) {}

  @Get()
  getProfile(@CurrentUser() user: { id: string }) {
    return this.users.getProfile(user.id)
  }

  @Patch()
  updateProfile(@Body() dto: UpdateProfileDto, @CurrentUser() user: { id: string }) {
    return this.users.updateProfile(user.id, dto)
  }

  @Get('addresses')
  getAddresses(@CurrentUser() user: { id: string }) {
    return this.users.getAddresses(user.id)
  }

  @Post('addresses')
  createAddress(@Body() dto: CreateAddressDto, @CurrentUser() user: { id: string }) {
    return this.users.createAddress(user.id, dto)
  }

  @Delete('addresses/:id')
  deleteAddress(@Param('id') id: string, @CurrentUser() user: { id: string }) {
    return this.users.deleteAddress(user.id, id)
  }
}

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
