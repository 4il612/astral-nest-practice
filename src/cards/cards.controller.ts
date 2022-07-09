import { Controller, Get } from '@nestjs/common';

@Controller('about')
export class CardsController {
    @Get()
    getCards(){
        return 'the cards'
    }
}
