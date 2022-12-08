import prisma from "../database/db.js";

import { DisciplineDto } from "../models/dataDto.js";

export async function getDisciplines() {
  return prisma.disciplines.findMany();
}

export async function getDiscipline(id: number) {
  return prisma.disciplines.findUnique({
    where: {
      id,
    },
  });
}

export async function createDiscipline(discipline: DisciplineDto) {
  return prisma.disciplines.create({
    data: discipline,
  });
}

export async function updateDiscipline(id: number, discipline: DisciplineDto) {
  return prisma.disciplines.update({
    where: {
      id,
    },
    data: discipline,
  });
}

export async function deleteDiscipline(id: number) {
  return prisma.disciplines.delete({
    where: {
      id,
    },
  });
}
