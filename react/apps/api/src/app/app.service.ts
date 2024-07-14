import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class AppService {
  async seed() {
    const cards = [
      {
        tittle: 'this is title',
        content: 'this is content',
      },
      {
        tittle: 'this is title',
        content: 'this is content',
      },
      {
        tittle: 'this is title',
        content: 'this is content',
      },
    ];

    await prisma.card.createMany({
      data: cards,
    });
    return true;
  }
  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }
}
