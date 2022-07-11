import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateCardInput{
    @Field()
    url: string;
    @Field()
    alt: string;
    @Field()
    date: string;
}