import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Card } from './card.entity';

@Injectable()
export class CardsService extends TypeOrmCrudService<Card>{
    constructor(@InjectRepository(Card) repo){
        super(repo)
    }
}
