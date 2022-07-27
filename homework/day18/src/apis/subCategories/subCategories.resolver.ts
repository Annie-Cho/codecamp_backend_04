import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateSubCategory } from './dto/createSubCategory.input';
import { SubCategory } from './entities/subCategory.entity';
import { SubCategoriesService } from './subCategories.service';

@Resolver()
export class SubCategoriesResolver {
  constructor(private readonly subCategoriesService: SubCategoriesService) {}

  @Query(() => [SubCategory])
  fetchSubCategories() {
    return this.subCategoriesService.findAll();
  }

  @Mutation(() => SubCategory)
  createSubCategory(
    @Args('createSubCategory') createSubCategory: CreateSubCategory, //
  ) {
    return this.subCategoriesService.create({ createSubCategory });
  }
}
