import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food)
    private readonly foodRepository: Repository<Food>,
  ) {}

  findAll() {
    return this.foodRepository.find();
  }

  findOne({ foodId }) {
    return this.foodRepository.findOne({ where: { id: foodId } });
  }

  create({ createFoodInput }) {
    return this.foodRepository.save({ ...createFoodInput });
  }

  async update({ foodId, updateFoodInput }) {
    const myFood = await this.foodRepository.findOne({ where: { id: foodId } });
    const result = this.foodRepository.save({
      ...myFood,
      id: foodId,
      ...updateFoodInput,
    });

    return result;
  }
}
