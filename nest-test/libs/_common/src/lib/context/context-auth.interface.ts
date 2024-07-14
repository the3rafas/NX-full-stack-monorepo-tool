// import { LangEnum } from '../../user/user.enum';
import { Timezone } from '../graphql/graphql-response.type';
import { Request } from 'express';
import { LangEnum } from '@prisma/client';
import { User } from '../Database/@generated/user/user.model';

export const IContextAuthServiceToken = 'IContextAuthService';

export interface IContextAuthService {
  getTimezone(timezoneAsString: string): Timezone;

  getUserFromReqHeaders(req: Request): Promise<User>;

  getLocale(req: Request): { lang: LangEnum; country: string };

  // hasPermission(permission: string, user: User): boolean;
}
