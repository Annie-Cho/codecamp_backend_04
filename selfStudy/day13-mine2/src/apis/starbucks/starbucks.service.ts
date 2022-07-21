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
    ];

    return result;
  }
}
