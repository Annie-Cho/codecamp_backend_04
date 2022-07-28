import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './commons/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //모든 API에서 통일하기 위해서 등록함.
  app.useGlobalFilters(new HttpExceptionFilter()); //우리가 만든 Exception Filter등록하기
  await app.listen(3000);
}
bootstrap();
