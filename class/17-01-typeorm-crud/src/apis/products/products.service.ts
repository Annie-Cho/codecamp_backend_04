import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable() //의존성 주입할 때 싱글톤이니 아니니.. 싱글톤은 디폴트였음. 여기서 옵션으로 싱글톤 아니게 만들 수 있음. {scope}?
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepository.find();
  }

  findOne({ productId }) {
    return this.productRepository.findOne({ where: { id: productId } });
  }

  create({ createProductInput }) {
    //DB에 카테고리 등록
    const result = this.productRepository.save({
      ...createProductInput,
      // 하나하나 직접 나열하는 방식
      // name: createProductInput.name,
      // description: createProductInput.description,
      // price: createProductInput.price,
    }); //DB에 저장됨.

    return result;
  }

  async update({ productId, updateProductInput }) {
    //1번째 방법 : result를 받아올 필요 없는 수정
    /* 수정할 때만 사용!!! => update
    this.productRepository.update(
      //첫번째 : 조건, 두번째: 업데이트할 내용
      { id: productId },
      {
        ...updateProductInput,
        // name: updateProductInput.name,
        // description: updateProductInput.description,
        // price: updateProductInput.price,
      },
    ); //이렇게 되면 수정은 잘 되지만 수정완료된 객체를 프론트로 반환해줘야하는데 해당 결과를 안줌.
    */

    //2번째 방법 : 수정 후 결과값까지 받을 때 사용
    const myproduct = await this.productRepository.findOne({
      where: { id: productId },
    });

    const result = this.productRepository.save({
      ...myproduct,
      // name: myproduct.name,
      // description: myproduct.description,
      // price: myproduct.price,
      id: productId,
      ...updateProductInput,
      // name: updateProductInput.name,
      // description: updateProductInput.price,
      // price: updateProductInput.price,
    });
    return result;
  }

  async checkSoldout({ productId }) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }
    //위 UnprocessableEntityException이 아래 주석처리된 걸 간단하게 할 수 있는 코드!
    /*
    if (product.isSoldout) {
      throw new HttpException(
        '이미 판매 완료된 상품입니다.',
        HttpStatus.UNPROCESSABLE_ENTITY, //422라고 적어도 되지만 이렇게 할 수 있음. 이러면 프론트쪽에는 422 번호로 나감!
      ); //백엔드에서 보여주는 에러!! 이걸로 써야함!! 뒷 인수는 http상태코드
      // throw new Error('이미 판매 완료된 상품입니다.');  //기본 에러
    }
    */
  }
}
