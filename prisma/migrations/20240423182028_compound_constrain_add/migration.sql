/*
  Warnings:

  - A unique constraint covering the columns `[userId,flatId]` on the table `bookings` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "bookings_flatId_key";

-- DropIndex
DROP INDEX "bookings_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "bookings_userId_flatId_key" ON "bookings"("userId", "flatId");
