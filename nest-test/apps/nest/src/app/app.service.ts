import { IRepository, Repositories, User } from '@nest-test/_common';
import { Inject, Injectable } from '@nestjs/common';
import { LangEnum, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class AppService {
  constructor(
    @Inject(Repositories.UserRepo)
    private readonly userRepo: IRepository<User>
  ) {}
  async getData() {
   return await this.userRepo.createOne({
      email: 'sadasdas',
      name: 'Sadasdas',
      password: '123',
      lang: LangEnum.EN,
    });
    // return { message: 'Welcome to el fantoooooo !' };
  }
}
