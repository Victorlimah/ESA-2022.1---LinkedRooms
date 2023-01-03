import {
  Disciplines,
  Rooms,
  Teachers,
  Blocks,
  Classes,
  Schedule,
} from "@prisma/client";
import prisma from "../database/db.js";
import { ClassEdit, ClassSpot } from "../services/classesService.js";

type allClasses = {
  id: number;
  name: string;
  teacher: string;
  students: number;
  block: string;
  number: string;
}

type roomWithBlocks = {
  id: number;
  block: string;
  number: number;
  capacity: number;
};

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
  const classes = await prisma.$queryRaw<allClasses[]>`
    SELECT c.id, d.name, t.id as "teacherId", t.name as "teacher", c.students,
    s.day, s.schedule, b.name as "block", r.number, r.id as "roomId" FROM
    classes c JOIN teachers t ON c."teacherId" = t.id
    JOIN rooms r ON c."roomId" = r.id
    JOIN blocks b ON r."blockId" = b.id
    JOIN disciplines d ON c."disciplineId" = d.id
    JOIN schedules s ON c."scheduleId" = s.id
  `;
  
  return classes;
}

export async function getDistinctClasses() {
  const classes = await prisma.$queryRaw<allClasses[]>`
    SELECT DISTINCT c.id, d.name, t.id as "teacherId", t.name as "teacher", c.students,
    s.day, s.schedule, b.name as "block", r.number, r.id as "roomId" FROM
    classes c JOIN teachers t ON c."teacherId" = t.id
    JOIN rooms r ON c."roomId" = r.id
    JOIN blocks b ON r."blockId" = b.id
    JOIN disciplines d ON c."disciplineId" = d.id
    JOIN schedules s ON c."scheduleId" = s.id
  `;

  // return classes so that there are no duplicates
  // duplicates == same teacher, same discipline, same block, same number, same schedule
  const response = [];

  classes.forEach((c) => {
    const index = response.findIndex(
      (r) =>
        r.teacher === c.teacher &&
        r.name === c.name &&
        r.block === c.block &&
        r.number === c.number
    );

    if (index === -1) {
      response.push(c);
    }
  }
  );

  return response;

}

export async function getCreate() {
  let teachers: Teachers[];
  let disciplines: Disciplines[];
  let rooms: roomWithBlocks[];

  Promise.all([
    (teachers = await prisma.teachers.findMany()),
    (disciplines = await prisma.disciplines.findMany()),
    (rooms = await prisma.$queryRaw<roomWithBlocks[]>`
        SELECT rooms.id, blocks.name, rooms.number, rooms.capacity
        FROM rooms
        INNER JOIN blocks ON rooms."blockId" = blocks.id
    `),
  ]);

  return { teachers, disciplines, rooms };
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
        },
      },
    },
  });

  if (!dataClass) throw new Error("Room not found");

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
        schedule: "asc",
      },
    },
  });

  const response = {
    id: dataClass.id,
    name: `${dataClass.block.name} - ${dataClass.number}`,
    capacity: dataClass.capacity,
    tags: dataClass.tags.map((tag) => tag.tag.name),
    segunda: formatClassesByRooms(
      classes.filter((classItem) => classItem.shedule.day === "SEGUNDA")
    ),
    terca: formatClassesByRooms(
      classes.filter((classItem) => classItem.shedule.day === "TERÇA")
    ),
    quarta: formatClassesByRooms(
      classes.filter((classItem) => classItem.shedule.day === "QUARTA")
    ),
    quinta: formatClassesByRooms(
      classes.filter((classItem) => classItem.shedule.day === "QUINTA")
    ),
    sexta: formatClassesByRooms(
      classes.filter((classItem) => classItem.shedule.day === "SEXTA")
    ),
  };

  console.log(response);

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
    };
  });
  return obj;
}

export async function getNew() {
  const teachers = await prisma.teachers.findMany();
  const disciplines = await prisma.disciplines.findMany();
  const roomsResponse = await prisma.rooms.findMany({
    include: {
      block: true,
    },
  });
  const rooms = roomsResponse.map((room) => {
    return {
      id: room.id,
      name: `${room.block.name} - ${room.number}`,
    };
  });

  return { teachers, disciplines, rooms };
}

export async function createClass(data: ClassSpot) {
  const { teacherId, disciplineId, roomId, students, schedules } = data;
  
  schedules.forEach(async (schedule, index) => {
    const id = await prisma.classes.count();
    await prisma.classes.create({
      data: {
        id: id + 1 + index,
        students,
        teacherId,
        disciplineId,
        roomId,
        scheduleId: schedule,
        schoolYear: "2022.1",
      },
    });
  });

  return { message: "Class created" };
}

export async function updateClass(data: any) {
  const { teacherId, teacher, roomId, students, number, block, id} = data;
  console.log(data);

  const t = await prisma.teachers.findFirst({
    where: {
      id: teacherId,
    },
  });

  if(t.name !== teacher) {
    const teacherId = await prisma.teachers.findFirst({
      where: {
        name: teacher,
      },
    });

    await prisma.classes.update({
      where: {
        id,
      },
      data: {
        teacherId: teacherId.id,
      },
    });
  }

  const blockId = await prisma.blocks.findFirst({
    where: {
      name: block,
    },
  });

  const room = await prisma.rooms.findFirst({
    where: {
      number,
      blockId: blockId.id,
    },
  });

  if(room.id !== roomId) {
    await prisma.classes.update({
      where: {
        id,
      },
      data: {
        roomId: room.id,
      },
    });
  }

  const s = await prisma.classes.findFirst({
    where: {
      id,
    },
    select: {
      students: true,
    },
  });

  if(s.students !== students) {
    await prisma.classes.update({
      where: {
        id,
      },
      data: {
        students,
      },
    });
  }

  return { message: "Class updated" };  
}