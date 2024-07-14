import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LangEnum } from './lang.enum';
import { NestedEnumLangEnumFilter } from './nested-enum-lang-enum-filter.input';

@InputType()
export class EnumLangEnumFilter {

    @Field(() => LangEnum, {nullable:true})
    equals?: keyof typeof LangEnum;

    @Field(() => [LangEnum], {nullable:true})
    in?: Array<keyof typeof LangEnum>;

    @Field(() => [LangEnum], {nullable:true})
    notIn?: Array<keyof typeof LangEnum>;

    @Field(() => NestedEnumLangEnumFilter, {nullable:true})
    not?: NestedEnumLangEnumFilter;
}
