import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Food } from '../foods/entities/food.entity';
import { Order } from './entities/order.entity';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Food])],
  providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}
