import prisma from "../database/db.js";
import { User } from "../models/dataDto.js";

export async function create(userData: User) {
  const user = await prisma.users.create({
    data: {
      ...userData
    },
  })
}

export async function search(param: string, value: string | number) {
  return await prisma.users.findFirst({
    where: {
      [param]: value,
    },
  });
}