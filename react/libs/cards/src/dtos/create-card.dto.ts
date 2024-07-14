import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCard {
  @Field()
  tittle: string;

  @Field()
  content: string;
}
