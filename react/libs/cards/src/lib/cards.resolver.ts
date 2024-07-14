import { Mutation } from '@nestjs/graphql';
import { Args } from '@nestjs/graphql';
import { Query, Resolver } from '@nestjs/graphql';
import { CreateCard } from '../dtos/create-card.dto';
import { Cards } from '../entity/cards.entity';
import { CardsService } from './cards.service';

@Resolver()
export class CardResolver {
  constructor(private cardService: CardsService) {}

  @Query(() => [Cards])
  findAll() {
    return this.cardService.findAll();
  }
  @Mutation(() => Cards)
  async create(@Args('data') data: CreateCard) {
    return this.cardService.create(data);
  }
}
