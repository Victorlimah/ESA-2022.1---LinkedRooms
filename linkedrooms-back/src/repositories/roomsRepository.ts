import prisma  from "../database/db.js";

import { Classes, Rooms } from "@prisma/client";

type searchStudent = {
  students: number;
  scheduleId: number;
};

export async function getRooms() {
  const rooms = await prisma.rooms.findMany();
  // para cada room usar a função getStudentsOfSchedulesRoom
  return rooms;
}

export async function getStudentsOfSchedulesRoom(day: string, block: string, room: string){
  const teste = await prisma.classes.findMany({
    where: {
      room: {
        block: {
          name: block,
        },
        number: room,
      },
    },
    select: {
      students: true,
      scheduleId: true,
      },
  });
  const response = factoryResponse(day, teste);
  return response;
}

function factoryResponse(day: string, data: searchStudent[]) {
  if (day === "SEGUNDA") {
    let m1 = data.find((item) => item.scheduleId === 7);
    let m2 = data.find((item) => item.scheduleId === 8);
    let t1 = data.find((item) => item.scheduleId === 9);
    let t2 = data.find((item) => item.scheduleId === 10);
    let n1 = data.find((item) => item.scheduleId === 11);
    let n2 = data.find((item) => item.scheduleId === 12);

    let a = m1 ? m1.students : 0;
    let b = m2 ? m2.students : 0;
    let c = t1 ? t1.students : 0;
    let d = t2 ? t2.students : 0;
    let e = n1 ? n1.students : 0;
    let f = n2 ? n2.students : 0;

    return [a, b, c, d, e, f];
  }

  if (day === "TERÇA") {
    let m1 = data.find((item) => item.scheduleId === 7);
    let m2 = data.find((item) => item.scheduleId === 8);
    let t1 = data.find((item) => item.scheduleId === 9);
    let t2 = data.find((item) => item.scheduleId === 10);
    let n1 = data.find((item) => item.scheduleId === 11);
    let n2 = data.find((item) => item.scheduleId === 12);

    let a = m1 ? m1.students : 0;
    let b = m2 ? m2.students : 0;
    let c = t1 ? t1.students : 0;
    let d = t2 ? t2.students : 0;
    let e = n1 ? n1.students : 0;
    let f = n2 ? n2.students : 0;

    return [a, b, c, d, e, f];
  }

  if (day === "QUARTA") {
    let m1 = data.find((item) => item.scheduleId === 13);
    let m2 = data.find((item) => item.scheduleId === 14);
    let t1 = data.find((item) => item.scheduleId === 15);
    let t2 = data.find((item) => item.scheduleId === 16);
    let n1 = data.find((item) => item.scheduleId === 17);
    let n2 = data.find((item) => item.scheduleId === 18);

    let a = m1 ? m1.students : 0;
    let b = m2 ? m2.students : 0;
    let c = t1 ? t1.students : 0;
    let d = t2 ? t2.students : 0;
    let e = n1 ? n1.students : 0;
    let f = n2 ? n2.students : 0;

    return [a, b, c, d, e, f];
  }

  if (day === "QUINTA") {
    let m1 = data.find((item) => item.scheduleId === 19);
    let m2 = data.find((item) => item.scheduleId === 20);
    let t1 = data.find((item) => item.scheduleId === 21);
    let t2 = data.find((item) => item.scheduleId === 22);
    let n1 = data.find((item) => item.scheduleId === 23);
    let n2 = data.find((item) => item.scheduleId === 24);

    let a = m1 ? m1.students : 0;
    let b = m2 ? m2.students : 0;
    let c = t1 ? t1.students : 0;
    let d = t2 ? t2.students : 0;
    let e = n1 ? n1.students : 0;
    let f = n2 ? n2.students : 0;

    return [a, b, c, d, e, f];
  }

  if (day === "SEXTA") {
    let m1 = data.find((item) => item.scheduleId === 25);
    let m2 = data.find((item) => item.scheduleId === 26);
    let t1 = data.find((item) => item.scheduleId === 27);
    let t2 = data.find((item) => item.scheduleId === 28);
    let n1 = data.find((item) => item.scheduleId === 29);
    let n2 = data.find((item) => item.scheduleId === 30);

    let a = m1 ? m1.students : 0;
    let b = m2 ? m2.students : 0;
    let c = t1 ? t1.students : 0;
    let d = t2 ? t2.students : 0;
    let e = n1 ? n1.students : 0;
    let f = n2 ? n2.students : 0;

    return [a, b, c, d, e, f];
  }
}


// ALEGRA