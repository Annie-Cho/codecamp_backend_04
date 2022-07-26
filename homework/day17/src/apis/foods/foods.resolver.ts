import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateFoodInput } from './dto/createFood.input';
import { UpdateFoodInput } from './dto/updateFood.input';
import { Food } from './entities/food.entity';
import { FoodService } from './foods.service';

@Resolver()
export class FoodResolver {
  constructor(private readonly foodService: FoodService) {}

  @Query(() => [Food])
  fetchFoods() {
    return this.foodService.findAll();
  }

  @Query(() => Food)
  fetchFood(@Args('foodId') foodId: string) {
    return this.foodService.findOne({ foodId });
  }

  @Mutation(() => Food)
  createFood(
    @Args('createFoodInput') createFoodInput: CreateFoodInput, //
  ) {
    return this.foodService.create({ createFoodInput });
  }

  @Mutation(() => Food)
  updateFood(
    @Args('foodId') foodId: string,
    @Args('updateFoodInput') updateFoodInput: UpdateFoodInput, //
  ) {
    return this.foodService.update({ foodId, updateFoodInput });
  }
}
