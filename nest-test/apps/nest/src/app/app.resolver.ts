import { User } from '@nest-test/_common';
import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { AuthGuard, CurrentUser } from '@guards';
@Resolver()
export class AppResolver {
  constructor(private appService: AppService) {}
  @UseGuards(AuthGuard)
  @Query(() => User)
  async create() {
    return this.appService.getData();
  }
}
 