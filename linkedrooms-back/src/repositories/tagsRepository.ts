import prisma from "../database/db.js";

import { TagDto } from "../models/dataDto.js";

export async function getTags() {
  return await prisma.tags.findMany();
}

export async function getTag(id: number) {
  return await prisma.tags.findUnique({
    where: {
      id,
    },
  });
}

export async function createTag(tag: TagDto) {
  return await prisma.tags.create({
    data: tag,
  });
}

export async function updateTag(id: number, tag: TagDto) {
  return await prisma.tags.update({
    where: {
      id,
    },
    data: tag,
  });
}

export async function deleteTag(id: number) {
  return await prisma.tags.delete({
    where: {
      id,
    },
  });
}