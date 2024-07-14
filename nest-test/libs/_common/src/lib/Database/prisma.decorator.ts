import { createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { RepoBuilder } from './prisma.builder';

// const Model = [Prisma.ModelName.User, Prisma.ModelName.SecurityGroup];
// export const repositories = Model.map((e) => ({
//   provide: `${e}Repo`,
//   useValue: new RepoBuilder(e),
// }));
const prismaRepo = createParamDecorator((data, ctx: GqlExecutionContext) => {
  if (data) {
    data = new RepoBuilder(data);
    return data;
  }
//   console.log("دخل داتا يا روح أمك");
  
});
