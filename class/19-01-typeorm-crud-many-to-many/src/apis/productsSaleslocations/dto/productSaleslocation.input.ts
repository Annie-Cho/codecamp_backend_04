import {
  extend,
  Field,
  InputType,
  OmitType,
  PartialType,
} from '@nestjs/graphql';
import { ProductSaleslocation } from '../entities/productSaleslocation.entity';

@InputType()
export class ProductSalesLocationInput extends OmitType(
  ProductSaleslocation,
  ['id'],
  InputType,
) {}
