import { Module } from '@nestjs/common';
import { BoardsResolver } from './boards.resolver';
import { BoardsService } from './boards.service';

//index.js이다!
@Module({
  providers: [BoardsResolver, BoardsService],
})
export class BoardsModule {}
