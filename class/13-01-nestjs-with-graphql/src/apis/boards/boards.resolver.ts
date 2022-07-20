import { Controller } from '@nestjs/common';
import { Query } from '@nestjs/graphql';
import { BoardsService } from './boards.service';

//@Controller -> 데코레이터. 아래 코드를 import된 @nestjs/common의 Controller에 인수로 넣는다.
@Controller()
export class BoardsResolver {
  constructor(private readonly boardsService: BoardsService) {}
  //private readonly -> appService가 안에서 읽기만 가능. 수정 불가.

  @Query(() => String)
  getHello(): string {
    //:string은 리턴타입. service에서 "Hello World!"가 넘어옴.
    return this.boardsService.getHello();
  }
}
