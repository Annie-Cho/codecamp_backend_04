import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class CreateFoodInput {
  @Field(() => String)
  name: string;

  @Min(0)
  @Field(() => Int)
  price: number;

  @Field(() => String)
  desc: string;

  @Min(0)
  @Field(() => Int)
  kcal: number;
}
