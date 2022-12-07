/*
  Warnings:

  - You are about to drop the column `sheduleId` on the `Classes` table. All the data in the column will be lost.
  - You are about to drop the `shedules` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `scheduleId` to the `Classes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Classes" DROP CONSTRAINT "Classes_sheduleId_fkey";

-- AlterTable
ALTER TABLE "Classes" DROP COLUMN "sheduleId",
ADD COLUMN     "scheduleId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "shedules";

-- CreateTable
CREATE TABLE "schedules" (
    "id" SERIAL NOT NULL,
    "schedule" TEXT NOT NULL,
    "day" TEXT NOT NULL,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "schedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
