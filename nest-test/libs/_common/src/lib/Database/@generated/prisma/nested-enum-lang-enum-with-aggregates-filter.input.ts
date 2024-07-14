import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LangEnum } from './lang.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumLangEnumFilter } from './nested-enum-lang-enum-filter.input';

@InputType()
export class NestedEnumLangEnumWithAggregatesFilter {

    @Field(() => LangEnum, {nullable:true})
    equals?: keyof typeof LangEnum;

    @Field(() => [LangEnum], {nullable:true})
    in?: Array<keyof typeof LangEnum>;

    @Field(() => [LangEnum], {nullable:true})
    notIn?: Array<keyof typeof LangEnum>;

    @Field(() => NestedEnumLangEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumLangEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumLangEnumFilter, {nullable:true})
    _min?: NestedEnumLangEnumFilter;

    @Field(() => NestedEnumLangEnumFilter, {nullable:true})
    _max?: NestedEnumLangEnumFilter;
}
