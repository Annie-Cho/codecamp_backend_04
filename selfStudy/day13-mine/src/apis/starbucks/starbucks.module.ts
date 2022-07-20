import { Module } from '@nestjs/common';
import { StarbucksService } from './starbucks.service';
import { StarbucksResolver } from './starbucks.resolver';

@Module({
  providers: [StarbucksResolver, StarbucksService],
})
export class StarbucksModule {}
