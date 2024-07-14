import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LangEnum } from '../prisma/lang.enum';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => LangEnum, {nullable:false})
    lang!: keyof typeof LangEnum;
}
