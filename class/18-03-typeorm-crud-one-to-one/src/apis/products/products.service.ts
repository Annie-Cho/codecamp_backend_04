import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductSaleslocation } from '../productsSaleslocations/entities/productSaleslocation.entity';
import { Product } from './entities/product.entity';

@Injectable() //의존성 주입할 때 싱글톤이니 아니니.. 싱글톤은 디폴트였음. 여기서 옵션으로 싱글톤 아니게 만들 수 있음. {scope}?
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationRepository: Repository<ProductSaleslocation>,
  ) {}

  findAll() {
    return this.productRepository.find({
      relations: ['productSaleslocation'],
    });
  }

  findOne({ productId }) {
    return this.productRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation'],
    });
  }

  async create({ createProductInput }) {
    //DB에 카테고리 등록
    //1. 상품만 등록하는 경우
    // const result = this.productRepository.save({
    //   ...createProductInput,
    //   // 하나하나 직접 나열하는 방식
    //   // name: createProductInput.name,
    //   // description: createProductInput.description,
    //   // price: createProductInput.price,
    // }); //DB에 저장됨.

    //2. 상품과 거래위치를 같이 등록하는 경우
    const { productSaleslocation, ...product } = createProductInput;
    const result = await this.productSaleslocationRepository.save({
      ...productSaleslocation,
    });

    const result2 = await this.productRepository.save({
      // name: product.name,
      // description: product.description,
      // price: product.price,
      ...product,
      // productSaleslocation: {
      //   ...result,
      //   //   // id: result.id,
      //   //   // address: result.address,
      //   //   // addressDetail: result.addressDetail,
      //   //   // lat: result.lat,
      //   //   // lng: result.lng,
      //   //   // meeting: result.e,
      // },
      productSaleslocation: result,
      // productSaleslocation: { id: result.id },
    });

    //프론트엔드로 넘어갈 때 result와 result2의 내용이 모두 넘어가야하므로 합쳐주어야한다.
    //따라서 result2에다가 통째로 넣기 vs id넣기.. DB에 넣는 건 동일하지만 프론트엔드에 넘겨주려면 result를 합쳐서 넘겨주는 게 좋다.
    return result2;
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
    // try {
    //   const product = await this.productRepository.findOne({
    //     where: { id: productId },
    //   });
    //   //만약 findOne에서 에러가 났을 경우에는 findOne아래에 있는 코드 수행 안됌.
    // } catch (error) {
    //   //error.message 하면 에러메시지 읽을 수 있음.
    // } finally {
    //   //성공하든 실패하든 무조건 해야해!! 라면 finally에 줘야한다.
    //   //ex)데이터베이스에 접속 후 조회 시 에러가 났을 경우 조회상관없이 끊어야한다.
    // }

    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }

    /*
    if (product.isSoldout) {
      throw new HttpException(
        '이미 판매 완료된 상품입니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    */
  }

  async delete({ productId }) {
    //1. 실제 삭제(정말 DB에서 삭제가 됨)
    // const result = await this.productRepository.delete({ id: productId });
    // return result.affected ? true : false; //affected에서 여기에 얼만큼 영향을 미쳤는지(?) 알려줌.

    //2. 소프트 삭제 - 마치 삭제가 된 것처럼 보여주기. isDeleted사용
    // this.productRepository.update({ id: productId }, { isDeleted: true });

    //3. 소프트 삭제 - deletedAt
    // this.productRepository.update({ id: productId }, { deletedAt: new Date() });

    //4. 소프트 삭제 - softRemove
    // this.productRepository.softRemove({ id: productId }); //자동적으로 deletedAt생성 및 fetch할 때 조건 자동으로 들어감

    //5. 소프트 삭제 - softDelete
    const result = await this.productRepository.softDelete({ id: productId });
    return result.affected ? true : false;
  }
}
