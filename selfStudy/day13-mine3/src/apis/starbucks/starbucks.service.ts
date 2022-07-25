import { Injectable } from '@nestjs/common';
import { NewStarbucks } from '../dto/newStarbucks.input';

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
        price: 5500,
        kcal: 120,
        saturated_fat: 10,
        protein: 6,
        salt: 2,
        sugar: 10,
        caffeine: 70,
      },
    ];

    return result;
  }

  create(newStarbucks: NewStarbucks) {
    console.log(newStarbucks);
    return '등록에 성공하였습니다.';
  }
}
