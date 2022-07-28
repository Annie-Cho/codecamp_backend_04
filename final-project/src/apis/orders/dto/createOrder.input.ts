import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => Int)
  price: number;

  //ManyToMany
  @Field(() => [String])
  foodIds: string[];
}
