import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { StarbucksModule } from './apis/starbucks/starbucks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Starbucks } from './apis/starbucks/entities/starbucks.entity';

@Module({
  imports: [
    StarbucksModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mytest04',
      entities: [Starbucks],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
