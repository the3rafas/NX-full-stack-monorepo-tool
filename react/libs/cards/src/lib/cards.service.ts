import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class CardsService {
  async findAll() {
    return await prisma.card.findMany({});
  }
  async create(data:any) {
    return await prisma.card.create({
      data,
    });
  }
}
