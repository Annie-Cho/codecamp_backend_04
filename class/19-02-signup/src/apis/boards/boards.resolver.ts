import { Controller } from '@nestjs/common';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { BoardsService } from './boards.service';
import { CreateBoardInput } from './dto/createBoard.input';
import { Board } from './entities/board.entity';

//@Controller -> 데코레이터. 아래 코드를 import된 @nestjs/common의 Controller에 인수로 넣는다.
@Controller()
export class BoardsResolver {
  constructor(private readonly boardsService: BoardsService) {}
  //private readonly -> appService가 안에서 읽기만 가능. 수정 불가.

  // @Query(() => String)
  // getHello(): string {
  //   //:string은 리턴타입. service에서 "Hello World!"가 넘어옴.
  //   return this.boardsService.getHello();
  // }

  /*
아래처럼 => [Board]로 하면 아래처럼 생성된다고 보면된다.
type Query {
    fetchBoards: [Board]   # => 배열 안에 객체 여러개를 의미
  }
*/

  @Query(() => [Board])
  fetchBoards() {
    return this.boardsService.findAll(); //return 해줘야 browser까지 나감!
  }

  @Mutation(() => String)
  createBoard(
    //=> 한꺼번에 보내기
    // @Args('writer') writer: string,
    // @Args('title') title: string,
    // @Args('contents') contents: string,
    @Args({ name: 'createBoardInput', nullable: true })
    createBoardInput: CreateBoardInput,
  ) {
    return this.boardsService.create({ createBoardInput });
  }

  /*
  @Mutation() => 각각 보내기
  createBoard(
    @Args('writer') writer: string,
    @Args('title') title: string,
    @Args('contents') contents: string,
  ) {
    return this.boardsService.create({ writer, title, contents });
  }
  */
}
