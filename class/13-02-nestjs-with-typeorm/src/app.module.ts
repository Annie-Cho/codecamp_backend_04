import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BoardsModule } from './apis/boards/boards.module';
import { Board } from './apis/boards/entities/board.entity';

//index.js이다!
@Module({
  imports: [
    BoardsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql', //docs의 code-first부분. 이 위치에 자동으로 코드가 생성된다. 내가 위치만 정해주면 된다.
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'myproject04',
      entities: [Board],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
