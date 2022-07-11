import { Injectable } from '@nestjs/common';
import { Card } from './card.entity';

@Injectable()
export class CardsService {
    async findAll(): Promise<Card[]>{
        const card = new Card()
        card.id = 1;
        card.url = "https://avatars.mds.yandex.net/i?id=0b4b4d998e608eb3c7265745ce419284-3548415-images-thumbs&n=13";
        card.alt = "рыба";
        card.date = "11 октября 2020 года";

        return [card];
    }
}
