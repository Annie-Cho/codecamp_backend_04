import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { FoodsModule } from './apis/foods/foods.module';
import 'dotenv/config';
import { UsersModule } from './apis/users/users.module';
import { ImagesModule } from './apis/images/images.module';
import { SubCategoriesModule } from './apis/subCategories/subCategories.module';
import { MainCategoriesModule } from './apis/mainCategories/mainCategories.module';
import { NutriesModule } from './apis/nutries/nutries.module';
import { OrdersModule } from './apis/orders/orders.module';

@Module({
  imports: [
    FoodsModule,
    UsersModule,
    ImagesModule,
    SubCategoriesModule,
    MainCategoriesModule,
    NutriesModule,
    OrdersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
