/*
  Warnings:

  - You are about to drop the `ClassGrid` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Classes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClassGrid" DROP CONSTRAINT "ClassGrid_courseId_fkey";

-- DropForeignKey
ALTER TABLE "ClassGrid" DROP CONSTRAINT "ClassGrid_disciplineId_fkey";

-- DropForeignKey
ALTER TABLE "ClassGrid" DROP CONSTRAINT "ClassGrid_periodId_fkey";

-- DropForeignKey
ALTER TABLE "Classes" DROP CONSTRAINT "Classes_disciplineId_fkey";

-- DropForeignKey
ALTER TABLE "Classes" DROP CONSTRAINT "Classes_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Classes" DROP CONSTRAINT "Classes_scheduleId_fkey";

-- DropForeignKey
ALTER TABLE "Classes" DROP CONSTRAINT "Classes_teacherId_fkey";

-- DropTable
DROP TABLE "ClassGrid";

-- DropTable
DROP TABLE "Classes";

-- CreateTable
CREATE TABLE "classes" (
    "id" SERIAL NOT NULL,
    "students" INTEGER NOT NULL,
    "schoolYear" TEXT NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "scheduleId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class_grid" (
    "id" SERIAL NOT NULL,
    "periodId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "class_grid_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "schedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_grid" ADD CONSTRAINT "class_grid_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "period"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_grid" ADD CONSTRAINT "class_grid_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_grid" ADD CONSTRAINT "class_grid_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
