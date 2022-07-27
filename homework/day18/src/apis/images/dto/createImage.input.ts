import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateImageInput {
  @Field(() => String)
  url: string;

  @Field(() => Boolean)
  isMain: boolean;

  //ManyToOne
  @Field(() => String)
  foodId: string;
}
