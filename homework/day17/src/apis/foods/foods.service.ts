import { Injectable, UnprocessableEntityException } from '@nestjs/common';
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
    const myFood = await this.foodRepository.findOne({
      where: { id: foodId },
    });

    const result = this.foodRepository.save({
      ...myFood,
      id: foodId,
      ...updateFoodInput,
    });
    return result;
  }

  async checkSoldout({ foodId }) {
    const food = await this.foodRepository.findOne({
      where: { id: foodId },
    });

    if (food.isSoldout) {
      throw new UnprocessableEntityException('현재 품절된 상품입니다.');
    }
  }
}
