import prisma from "../database/db.js";

import { CourseDto } from "../models/dataDto.js";

export async function getCourses() {
  return await prisma.courses.findMany();
}

export async function getCourse(id: number) {
  return await prisma.courses.findUnique({
    where: {
      id: id,
    },
  });
}

export async function createCourse(course: CourseDto) {
  return await prisma.courses.create({
    data: course,
  });
}

export async function updateCourse(id: number, course: CourseDto) {
  return await prisma.courses.update({
    where: {
      id: id,
    },
    data: course,
  });
}

export async function deleteCourse(id: number) {
  return await prisma.courses.delete({
    where: {
      id: id,
    },
  });
}