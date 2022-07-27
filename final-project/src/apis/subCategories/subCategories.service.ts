import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubCategory } from './entities/subCategory.entity';

@Injectable()
export class SubCategoriesService {
  constructor(
    @InjectRepository(SubCategory)
    private readonly subCategoryRepository: Repository<SubCategory>,
  ) {}

  findAll() {
    return this.subCategoryRepository.find();
  }

  create({ createSubCategory }) {
    return this.subCategoryRepository.save(createSubCategory);
  }
}
