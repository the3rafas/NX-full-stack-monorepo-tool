-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "id" TEXT NOT NULL,
    "tittle" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);
