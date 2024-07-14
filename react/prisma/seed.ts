import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const cards = [
  {
    title: 'this is title',
    content: 'this is content',
  },
  {
    title: 'this is title',
    content: 'this is content',
  },
  {
    title: 'this is title',
    content: 'this is content',
  },
];

async function Main() {
  await prisma.card.createMany({
    data: cards,
  });
}

Main()
  .catch((err) => {
    console.log('errrr');
  })
  .finally(() => {
    prisma.$disconnect();
  });
