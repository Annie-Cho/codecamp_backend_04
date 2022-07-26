import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './createProduct.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  //이렇게 안써주고 위에 partialType으로 함.
  // @Field(() => String)
  // qqq: string
}

//PickType:createProductInput에서 뭐뭐를 고를껀지, OmitType:뒤에 써준 것을 제외하고 보여준다..
//PickType(CreateProductInput, ['name, 'price'])
//OmitType(CreateProductInput, ['description'])
