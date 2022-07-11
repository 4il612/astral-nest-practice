import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsResolver } from './cards.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [CardsService, CardsResolver]
})
export class CardsModule {}
