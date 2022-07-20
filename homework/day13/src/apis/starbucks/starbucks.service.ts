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
        kcal: 110,
        saturated_fat: 4,
        protein: 6,
        salt: 70,
        sugar: 8,
        caffeine: 75,
      },
      {
        menu: '아이스 유자 민트 티',
        price: 5900,
        kcal: 145,
        saturated_fat: 0,
        protein: 0,
        salt: 5,
        sugar: 37,
        caffeine: 0,
      },
      {
        menu: '자바 칩 프라푸치노',
        price: 6300,
        kcal: 340,
        saturated_fat: 0,
        protein: 6,
        salt: 180,
        sugar: 42,
        caffeine: 100,
      },
      {
        menu: '아이스 자몽 허니 블랙 티',
        price: 5700,
        kcal: 125,
        saturated_fat: 0,
        protein: 0,
        salt: 5,
        sugar: 30,
        caffeine: 30,
      },
    ];

    return result;
  }

  create({ createStarbucksInput }) {
    console.log(createStarbucksInput);
    return '등록에 성공하였습니다.';
  }
}
