import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateFoodInput } from './dto/createFood.input';
import { UpdateFoodInput } from './dto/updateFood.input';
import { Food } from './entities/food.entity';
import { FoodsService } from './foods.service';

@Resolver()
export class FoodsResolver {
  constructor(private readonly foodsService: FoodsService) {}

  @Query(() => [Food])
  fetchFoods() {
    return this.foodsService.findAll();
  }

  @Query(() => Food)
  fetchFood(@Args('foodId') foodId: string) {
    return this.foodsService.findOne({ foodId });
  }

  @Mutation(() => Food)
  createFood(
    @Args('createFoodInput') createFoodInput: CreateFoodInput, //
  ) {
    return this.foodsService.create({ createFoodInput });
  }

  @Mutation(() => Food)
  async updateFood(
    @Args('foodId') foodId: string,
    @Args('updateFoodInput') updateFoodInput: UpdateFoodInput, //
  ) {
    // await this.foodService.checkSoldout({ foodId });

    return this.foodsService.update({ foodId, updateFoodInput });
  }
}
