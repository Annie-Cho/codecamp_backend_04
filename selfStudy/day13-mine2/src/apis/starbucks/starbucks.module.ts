import { Module } from '@nestjs/common';
import { StarbucksService } from './starbucks.service';
import { StarbucksResolver } from './starbucks.Resolver';

@Module({
  providers: [StarbucksResolver, StarbucksService],
})
export class StarbucksModule {}
