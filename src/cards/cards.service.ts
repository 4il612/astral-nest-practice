import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';
import { CreateCardInput } from './dto/create-card.input';

@Injectable()
export class CardsService {
    constructor(@InjectRepository(Card) private cardsRepository: Repository<Card>){}

    createCard(createCardInput: CreateCardInput): Promise<Card>{
        const newCard = this.cardsRepository.create(createCardInput);
        return this.cardsRepository.save(newCard);
    }

    async findAll(): Promise<Card[]>{
        return this.cardsRepository.find();
    }

    findOne(id: number): Promise<Card>{
        return this.cardsRepository.findOneOrFail({where: {id: id}});
    }

}
