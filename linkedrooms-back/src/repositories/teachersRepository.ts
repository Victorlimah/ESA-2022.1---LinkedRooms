import prisma from "../database/db.js";

import { TeacherDto } from "../models/dataDto.js";

export async function getTeachers() {
  return prisma.teachers.findMany();
}

export async function getTeacherById(id: number) {
  return prisma.teachers.findUnique({
    where: {
      id,
    },
  });
}

export async function createTeacher(teacher: TeacherDto) {
  return prisma.teachers.create({
    data: teacher,
  });
}

export async function updateTeacher(id: number, teacher: TeacherDto) {
  return prisma.teachers.update({
    where: {
      id,
    },
    data: teacher,
  });
}

export async function deleteTeacher(id: number) {
  return prisma.teachers.delete({
    where: {
      id,
    },
  });
}
