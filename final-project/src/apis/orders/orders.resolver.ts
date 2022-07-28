import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { CreateOrderInput } from './dto/createOrder.input';
import { Order } from './entities/order.entity';

@Resolver()
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query(() => [Order])
  fetchOrders() {
    return this.ordersService.findAll();
  }

  @Mutation(() => Order)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.ordersService.create({ createOrderInput });
  }
}
