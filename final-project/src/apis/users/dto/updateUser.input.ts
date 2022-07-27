import { InputType, OmitType, PartialType, PickType } from '@nestjs/graphql';
import { CreateUserInput } from './createUser.input';

@InputType()
export class UpdateUserInput extends PartialType(
  OmitType(CreateUserInput, ['id']),
) {}
