import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { BullModule } from '@nestjs/bull'
import { PrismaModule } from './prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { ProductsModule } from './products/products.module'
import { CategoriesModule } from './categories/categories.module'
import { CartModule } from './cart/cart.module'
import { OrdersModule } from './orders/orders.module'
import { PaymentsModule } from './payments/payments.module'
import { InventoryModule } from './inventory/inventory.module'
import { ShippingModule } from './shipping/shipping.module'
import { ReviewsModule } from './reviews/reviews.module'
import { AdminModule } from './admin/admin.module'
import { NotificationsModule } from './notifications/notifications.module'

@Module({
  imports: [
    // Config — available globally
    ConfigModule.forRoot({ isGlobal: true }),

    // Rate limiting — 100 requests per minute per IP by default
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 100 }]),

    // BullMQ backed by Redis
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        redis: {
          host: config.get<string>('REDIS_HOST', 'localhost'),
          port: config.get<number>('REDIS_PORT', 6379),
          password: config.get<string>('REDIS_PASSWORD') || undefined,
        },
      }),
    }),

    // Core infrastructure
    PrismaModule,

    // Domain modules
    AuthModule,
    UsersModule,
    ProductsModule,
    CategoriesModule,
    CartModule,
    OrdersModule,
    PaymentsModule,
    InventoryModule,
    ShippingModule,
    ReviewsModule,
    AdminModule,
    NotificationsModule,
  ],
})
export class AppModule {}
