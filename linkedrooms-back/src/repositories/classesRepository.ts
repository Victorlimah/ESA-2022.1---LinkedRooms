import { Disciplines, Rooms, Teachers, Blocks } from '@prisma/client';
import prisma  from "../database/db.js";

type roomWithBlocks = {
  id: number;
  block: string,
  number: number,
  capacity: number,
}

export async function getClasses() {
    const classes = await prisma.classes.findMany();
    return classes;
}

export async function getCreate() {
  let teachers: Teachers[];  
  let disciplines: Disciplines[];
  let rooms: roomWithBlocks[];

  Promise.all([
        teachers = await prisma.teachers.findMany(),
        disciplines = await prisma.disciplines.findMany(),
        rooms = await prisma.$queryRaw<roomWithBlocks[]>`
        SELECT rooms.id, blocks.name, rooms.number, rooms.capacity
        FROM rooms
        INNER JOIN blocks ON rooms."blockId" = blocks.id
    `,
    ]);


    return {teachers, disciplines, rooms};
  }