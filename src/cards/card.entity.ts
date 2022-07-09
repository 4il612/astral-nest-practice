import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Card{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    url: string;

    @ApiProperty()
    @Column()
    alt: string;

    @ApiProperty()
    @Column()
    date: string;
}