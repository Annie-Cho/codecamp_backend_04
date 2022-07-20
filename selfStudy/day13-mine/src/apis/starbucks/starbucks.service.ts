import { Injectable } from '@nestjs/common';

@Injectable()
export class StarbucksService {
  findAll() {
    const result = [
      {
        menu: '아메리카노',
        price: 4500,
        kcal: 5,
        saturated_fat: 0,
        protein: 0,
        salt: 0,
        sugar: 0,
        caffeine: 75,
      },
      {
        menu: '카페라떼',
        price: 5000,
        kcal: 50,
        saturated_fat: 10,
        protein: 4,
        salt: 5,
        sugar: 20,
        caffeine: 75,
      },
    ];

    return result;
  }

  create({ createStarbucksInput }) {
    console.log(createStarbucksInput);
    return '등록에 성공하였습니다.';
  }
}
