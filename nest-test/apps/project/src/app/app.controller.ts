import { Controller, Get, UseGuards } from '@nestjs/common';

import { AppService } from './app.service';
import { AuthGuard, CurrentUser } from '@guards';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(AuthGuard)
  @Get()
  getData() {
    return this.appService.getData();
  }
}
