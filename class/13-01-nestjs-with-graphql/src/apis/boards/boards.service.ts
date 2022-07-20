import { Injectable } from '@nestjs/common';

//@Injectable -> 주입가능한
@Injectable()
export class BoardsService {
  getHello() {
    return 'Hello World!';
  }
}
