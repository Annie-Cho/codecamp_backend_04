import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  @Query(() => [Product])
  fetchProducts() {
    return this.productService.findAll();
  }

  @Query(() => Product)
  fetchProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.findOne({ productId });
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productService.create({ createProductInput });
  }

  @Mutation(() => Product) //수정된 객체 자체를 프론트로 넘겨주는 것이 좋다.
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    //판매가 완료되었는지 확인해보기
    await this.productService.checkSoldout({ productId }); //얘가 끝나기 전까지 아래로 못 내려감

    //수정하기
    return this.productService.update({ productId, updateProductInput });
  }

  @Mutation(() => Boolean)
  deleteProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.delete({ productId });
  }
}
