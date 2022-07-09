import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Card } from './card.entity';
import { CardsService } from './cards.service';


@Crud({
    model:{
        type: Card
    }
})

@Controller('api')
export class CardsController implements CrudController<Card>{
    constructor(public service: CardsService){}
}
