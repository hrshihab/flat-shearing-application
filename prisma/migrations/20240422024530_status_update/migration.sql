/*
  Warnings:

  - The `status` column on the `bookings` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('BOOKED', 'PENDING', 'REJECTED');

-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "flats" ALTER COLUMN "availability" SET DEFAULT true;
