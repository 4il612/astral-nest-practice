import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'base.sqlite',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), CardsModule],
})
export class AppModule {}
