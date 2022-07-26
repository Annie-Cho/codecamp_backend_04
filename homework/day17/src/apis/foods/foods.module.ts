import { Module } from '@nestjs/common';
import { Food } from './entities/food.entity';
import { FoodResolver } from './foods.resolver';
import { FoodService } from './foods.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Food, //
    ]),
  ],
  providers: [FoodResolver, FoodService],
})
export class FoodModule {}
