import { Get, Query } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategoryService } from './productCategory.service';

@Resolver()
export class ProductCategoryResolver {
  constructor(private readonly productCategoryService: ProductCategoryService) {
    // this.productCategoryService = productCategoryService;       //앞에 private readonly등이 붙으면 자동으로 생성된다. 따라서 눈에는 안보이지만 자동화된 것임.
  }

  @Mutation(() => ProductCategory)
  createProductCategory(
    @Args('name') name: string, //
  ) {
    return this.productCategoryService.create({ name });
  }
}
