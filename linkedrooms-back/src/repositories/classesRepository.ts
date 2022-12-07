import { Disciplines, Rooms, Teachers, Blocks, Classes, Schedule } from '@prisma/client';
import prisma  from "../database/db.js";

type roomWithBlocks = {
  id: number;
  block: string,
  number: number,
  capacity: number,
}

type classList = {
  id: number;
  students: number;
  schoolYear: string;
  teacherId: number;
  scheduleId: number;
  roomId: number;
  disciplineId: number;
  discipline: Disciplines;
  teacher: Teachers;
  shedule: Schedule;
};

export async function getClasses() {
    const classes = await prisma.classes.findMany({
      include: {
        discipline: true,
        teacher: true,
        room: {
          include: {
            block: true,
          },
        }
      }
    });
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
  
export async function getClassesByRoomId(blockId: number, number: string) {

  const dataClass = await prisma.rooms.findFirst({
    where: {
      blockId,
      number,
    },
    include: {
      block: true,
      tags: {
        include: {
          tag: true,
        }
      },
    },
  }); 

  if (!dataClass) throw new Error('Room not found');

  const classes = await prisma.classes.findMany({
    where: {
      roomId: dataClass.id,
    },
    include: {
      discipline: true,
      teacher: true,
      shedule: true,
    },
    orderBy: {
      shedule: {
        schedule: 'asc',
      },
    },
  });

  const response = {
    id: dataClass.id,
    name: `${dataClass.block.name} - ${dataClass.number}`,  
    capacity: dataClass.capacity,
    tags: dataClass.tags.map(tag => tag.tag.name),
    segunda: formatClassesByRooms(classes.filter(classItem => classItem.shedule.day === 'SEGUNDA')),
    terca: formatClassesByRooms(classes.filter(classItem => classItem.shedule.day === 'TERÇA')),
    quarta: formatClassesByRooms(classes.filter(classItem => classItem.shedule.day === 'QUARTA')),
    quinta: formatClassesByRooms(classes.filter(classItem => classItem.shedule.day === 'QUINTA')),
    sexta: formatClassesByRooms(classes.filter(classItem => classItem.shedule.day === 'SEXTA')),
  }

  return response;
}

function formatClassesByRooms(classes: classList[]) {
  const obj = classes.map((classItem) => {
    return {
      id: classItem.id,
      code: classItem.discipline.code,
      name: classItem.discipline.name,
      teacher: classItem.teacher.name,
      students: classItem.students,
      schedule: classItem.shedule.schedule,
    }
  });
  return obj;
}