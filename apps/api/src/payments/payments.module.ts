import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { PaymentsService } from './payments.service'
import { PaymentsController } from './payments.controller'
import { InventoryModule } from '../inventory/inventory.module'
import { NotificationsModule } from '../notifications/notifications.module'

@Module({
  imports: [HttpModule, InventoryModule, NotificationsModule],
  providers: [PaymentsService],
  controllers: [PaymentsController],
  exports: [PaymentsService],
})
export class PaymentsModule {}
