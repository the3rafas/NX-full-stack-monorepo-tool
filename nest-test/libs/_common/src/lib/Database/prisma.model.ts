import { Prisma } from '@prisma/client';
import { RepoBuilder } from './prisma.builder';
const { ModelName } = Prisma;

export const repositories = Object.keys(ModelName).map((e) => ({
  provide: `${e}Repo`,
  useValue: new RepoBuilder(e),
}));
