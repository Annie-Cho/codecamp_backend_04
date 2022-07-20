import { Injectable } from '@nestjs/common';

//@Injectable -> 주입가능한
@Injectable()
export class AppService {
  getHello() {
    return 'Hello World!';
  }
}
