import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodsService {
  constructor(
    @InjectRepository(Food)
    private readonly foodRepository: Repository<Food>,
  ) {}

  findAll() {
    return this.foodRepository.find({
      relations: ['subCategory'],
    });
  }

  findAllWithDeleted() {
    return this.foodRepository.find({
      withDeleted: true,
      relations: ['subCategory'],
    });
  }

  findOne({ foodId }) {
    return this.foodRepository.findOne({
      where: { id: foodId },
      relations: ['subCategory'],
    });
  }

  create({ createFoodInput }) {
    const { subCategoryId, ...food } = createFoodInput;

    return this.foodRepository.save({
      ...food,
      subCategory: { id: subCategoryId },
    });
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

  async delete({ foodId }) {
    const result = await this.foodRepository.softDelete({ id: foodId });
    return result.affected;
  }

  async restore({ foodId }) {
    const result = await this.foodRepository.restore({ id: foodId });
    return result.affected;
  }
}
