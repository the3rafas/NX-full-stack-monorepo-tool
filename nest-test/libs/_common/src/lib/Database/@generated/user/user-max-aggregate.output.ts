import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LangEnum } from '../prisma/lang.enum';

@ObjectType()
export class UserMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => LangEnum, {nullable:true})
    lang?: keyof typeof LangEnum;
}
