import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Card{
    @Field(type => Int)
    id: number;

    @Field()
    url: string;

    @Field()
    alt: string;

    @Field()
    date: string;
}