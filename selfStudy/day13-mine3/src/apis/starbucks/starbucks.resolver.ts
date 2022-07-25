import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewStarbucks } from '../dto/newStarbucks.input';
import { Starbucks } from '../entities/starbucks.entity';
import { StarbucksService } from './starbucks.service';

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  @Query(() => [Starbucks])
  fetchStarbucks() {
    return this.starbucksService.findAll();
  }

  @Mutation(() => String)
  createStarbucks(@Args('newStarbucks') newStarbucks: NewStarbucks) {
    return this.starbucksService.create(newStarbucks);
  }
}
