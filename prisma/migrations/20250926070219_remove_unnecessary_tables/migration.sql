/*
  Warnings:

  - You are about to drop the `pools` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `settings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."pools" DROP CONSTRAINT "pools_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."sessions" DROP CONSTRAINT "sessions_poolId_fkey";

-- DropForeignKey
ALTER TABLE "public"."sessions" DROP CONSTRAINT "sessions_userId_fkey";

-- DropTable
DROP TABLE "public"."pools";

-- DropTable
DROP TABLE "public"."sessions";

-- DropTable
DROP TABLE "public"."settings";

-- DropEnum
DROP TYPE "public"."SessionStatus";
