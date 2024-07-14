import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Cards {
  @Field(() => String)
  id: string;

  @Field(() => String)
  tittle: string;

  @Field(() => String)
  content: string;
}
