import {
  Controller,
  Post,
  Body,
  Headers,
  Req,
  UseGuards,
  HttpCode,
  HttpStatus,
  RawBodyRequest,
} from '@nestjs/common'
import { Request } from 'express'
import { PaymentsService } from './payments.service'
import { InitializePaymentDto } from './dto/initialize-payment.dto'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CurrentUser } from '../common/decorators/current-user.decorator'

@Controller('payments')
export class PaymentsController {
  constructor(private payments: PaymentsService) {}

  /**
   * POST /api/v1/payments/initialize
   * Auth required. Returns { reference, accessCode } for the Paystack inline popup.
   */
  @UseGuards(JwtAuthGuard)
  @Post('initialize')
  initialize(
    @Body() dto: InitializePaymentDto,
    @CurrentUser() user: { id: string },
  ) {
    return this.payments.initialize(dto, user.id)
  }

  /**
   * POST /api/v1/payments/webhook
   * No auth — verified by HMAC-SHA512 signature.
   * Must receive the raw body (configured in main.ts).
   */
  @Post('webhook')
  @HttpCode(HttpStatus.OK)
  webhook(
    @Req() req: RawBodyRequest<Request>,
    @Headers('x-paystack-signature') signature: string,
  ) {
    return this.payments.handleWebhook(req.rawBody!, signature)
  }
}
