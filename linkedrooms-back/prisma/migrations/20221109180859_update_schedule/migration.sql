/*
  Warnings:

  - You are about to drop the column `shedule` on the `shedules` table. All the data in the column will be lost.
  - Added the required column `schedule` to the `shedules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "shedules" DROP COLUMN "shedule",
ADD COLUMN     "schedule" TEXT NOT NULL;
