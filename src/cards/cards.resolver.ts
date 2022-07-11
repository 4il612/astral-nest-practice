import { Resolver, Query } from '@nestjs/graphql';
import { Card } from './card.entity';
import { CardsService } from './cards.service';

@Resolver(of => Card)
export class CardsResolver {
    constructor(private cardsService: CardsService){}
    @Query(returns => [Card])
    cards(): Promise<Card[]>{
        return this.cardsService.findAll();
    }
}
