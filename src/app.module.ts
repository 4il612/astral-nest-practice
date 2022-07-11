import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CardsModule } from "./cards/cards.module";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo"
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    driver: ApolloDriver
  }),
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'base.sql',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  CardsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule{}