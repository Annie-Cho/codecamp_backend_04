import { Module } from '@nestjs/common';
import { Food } from './entities/food.entity';
import { FoodsResolver } from './foods.resolver';
import { FoodsService } from './foods.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Food, //
    ]),
  ],
  providers: [FoodsResolver, FoodsService],
})
export class FoodsModule {}
