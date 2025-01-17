-- CreateEnum
CREATE TYPE "LangEnum" AS ENUM ('EN', 'AR');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "lang" "LangEnum" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
