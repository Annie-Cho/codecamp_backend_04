import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  pwd: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  email: string;
}
