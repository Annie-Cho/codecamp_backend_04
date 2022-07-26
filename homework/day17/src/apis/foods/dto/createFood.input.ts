import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateFoodInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  price: number;

  @Field(() => String)
  desc: string;

  @Field(() => Int)
  kcal: number;
}
