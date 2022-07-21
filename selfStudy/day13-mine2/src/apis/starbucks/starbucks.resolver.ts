import { Args, Mutation, Query } from '@nestjs/graphql';
import { Starbucks } from '../entities/starbucks.entity';
import { StarbucksService } from './starbucks.service';
import { CreateStarbucksInput } from '../dto/createStarbucks.input';
import { Controller } from '@nestjs/common';

@Controller()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  @Query(() => [Starbucks])
  fetchStarbucks() {
    return this.starbucksService.findAll();
  }

  @Mutation(() => String)
  createStarbucks(
    @Args('createStarbucksInput') createStarbucksInput: CreateStarbucksInput,
  ) {
    return this.starbucksService.create({ createStarbucksInput });
  }
}
