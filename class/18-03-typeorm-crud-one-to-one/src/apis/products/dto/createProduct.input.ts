import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { ProductSalesLocationInput } from 'src/apis/productsSaleslocations/dto/productSaleslocation.input';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Min(0) //0보다 작은값이 들어오면 못들어오게 해줘
  @Field(() => Int)
  price: number;

  //OneToOne
  @Field(() => ProductSalesLocationInput)
  productSaleslocation: ProductSalesLocationInput;

  //ManyToOne
  @Field(() => String)
  productCategoryId: string;
}
