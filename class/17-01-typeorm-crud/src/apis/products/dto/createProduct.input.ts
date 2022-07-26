import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Min(0) //0보다 작은값이 들어오면 못들어오게 해줘
  @Field(() => Int)
  price: number;
}
