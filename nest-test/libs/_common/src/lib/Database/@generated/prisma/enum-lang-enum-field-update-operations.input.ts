import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LangEnum } from './lang.enum';

@InputType()
export class EnumLangEnumFieldUpdateOperationsInput {

    @Field(() => LangEnum, {nullable:true})
    set?: keyof typeof LangEnum;
}
