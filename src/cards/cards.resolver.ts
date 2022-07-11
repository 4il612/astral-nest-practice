import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Card } from './card.entity';
import { CardsService } from './cards.service';
import { CreateCardInput } from './dto/create-card.input';

@Resolver(of => Card)
export class CardsResolver {
    constructor(private cardsService: CardsService){}
    @Query(returns => [Card])
    cards(): Promise<Card[]>{
        return this.cardsService.findAll();
    }

    @Mutation(returns => Card)
    createCard(@Args('createCardInput') createCardInput: CreateCardInput): Promise<Card>{
        return this.cardsService.createCard(createCardInput);
    }

}
