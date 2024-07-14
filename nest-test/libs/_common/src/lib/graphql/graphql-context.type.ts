import { LangEnum } from '@prisma/client';
import { User } from '../Database/@generated/user/user.model';
import { IDataLoaders } from '../dataloader/dataloader.interface';
import { Timezone } from './graphql-response.type';

export interface GqlContext {
  currentUser?: User;
  req: Request;
  lang: LangEnum;
  country: string;
  timezone: Timezone;
  loaders: IDataLoaders;
}
