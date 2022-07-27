import { Module } from '@nestjs/common';
import { SubCategory } from './entities/subCategory.entity';
import { SubCategoriesResolver } from './subCategories.resolver';
import { SubCategoriesService } from './subCategories.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategory])],
  providers: [SubCategoriesResolver, SubCategoriesService],
})
export class SubCategoriesModule {}
