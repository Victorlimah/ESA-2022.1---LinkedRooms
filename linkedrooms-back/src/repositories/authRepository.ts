import prisma from "../database/db";

export async function create(userData) {
  const user = await prisma.users.create({
    data: {
      ...userData
    },
  })
}

export async function search(param: string, value: string | number) {
  return prisma.users.findFirst({
    where: {
      [param]: value,
    },
  });
}