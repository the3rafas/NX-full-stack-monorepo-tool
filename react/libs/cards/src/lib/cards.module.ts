import { Module } from '@nestjs/common';
import { CardResolver } from './cards.resolver';
import { CardsService } from './cards.service';

@Module({
  controllers: [],
  providers: [CardsService, CardResolver],
  exports: [CardsService, CardResolver],
})
export class CardsModule {}
