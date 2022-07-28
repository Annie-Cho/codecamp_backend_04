import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from '../foods/entities/food.entity';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(Food)
    private readonly foodRepository: Repository<Food>,
  ) {}

  findAll() {
    return this.orderRepository.find({
      relations: ['foods'],
    });
  }

  async create({ createOrderInput }) {
    const { foodIds, ...order } = createOrderInput;

    const day = new Date();

    const result = [];
    for (let i = 0; i < foodIds.length; i++) {
      const newFood = await this.foodRepository.findOne({
        where: { id: foodIds[i] },
      });
      if (newFood) {
        result.push(newFood);
      } else {
        throw new HttpException(
          '존재하지 않는 상품입니다.',
          HttpStatus.CONFLICT,
        );
      }
    }

    return this.orderRepository.save({
      ...order,
      date: day,
      foods: result,
    });
  }
}
