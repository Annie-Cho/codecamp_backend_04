import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productCategory.entity';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}

  async create({ name }) {
    //DB에 카테고리 등록
    const result = await this.productCategoryRepository.save({ name: name }); //DB에 저장됨.
    console.log(result);
    // return { message: '등록에 성공하였습니다.' };
    return result; //굳이 등록에 성공하였습니다보다 이렇게 받아온 result를 리턴하는 것이 거의 대부분이다. {id: qwer-qwer, name:의류}
  }
}
