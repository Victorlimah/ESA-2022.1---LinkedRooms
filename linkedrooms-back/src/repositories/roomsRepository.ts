import prisma  from "../database/db.js";

import { Classes, Rooms } from "@prisma/client";

type searchStudent = {
  students: number;
  scheduleId: number;
};

type roomSpot = {
  id: number;
  number: string,
  blockId: number,
  capacity: number,
  students: number[],
}

type responseRoom = {
  block: string;
  rooms: roomSpot[];
};

export async function getRooms() {
  const rooms = await prisma.rooms.findMany();
  // para cada room usar a função getStudentsOfSchedulesRoom
  // e retornar um array com os dados

  const roomsScheduleSegunda = rooms.map(async (room) => {
    const roomSchedule = await getStudentsOfSchedulesRoom(
      "SEGUNDA",
      room.blockId,
      room.number
    );
    return { ...room, students: roomSchedule };
  });

  const roomsScheduleTerca = rooms.map(async (room) => {
    const roomSchedule = await getStudentsOfSchedulesRoom(
      "TERÇA",
      room.blockId,
      room.number
    );
    return { ...room, students: roomSchedule };
  });

  const roomsScheduleQuarta = rooms.map(async (room) => {
    const roomSchedule = await getStudentsOfSchedulesRoom(
      "QUARTA",
      room.blockId,
      room.number
    );
    return { ...room, students: roomSchedule };
  });

  const roomsScheduleQuinta = rooms.map(async (room) => {
    const roomSchedule = await getStudentsOfSchedulesRoom(
      "QUINTA",
      room.blockId,
      room.number
    );
    return { ...room, students: roomSchedule };
  });

  const roomsScheduleSexta = rooms.map(async (room) => {
    const roomSchedule = await getStudentsOfSchedulesRoom(
      "SEXTA",
      room.blockId,
      room.number
    );
    return { ...room, students: roomSchedule };
  });


  const roomsSegunda = { rooms: await Promise.all(roomsScheduleSegunda)}
  const responseSegunda = formatResponseBlock(roomsSegunda);

  const roomsTerca = { rooms: await Promise.all(roomsScheduleTerca) };
  const responseTerca = formatResponseBlock(roomsTerca);

  const roomsQuarta = { rooms: await Promise.all(roomsScheduleQuarta) };
  const responseQuarta = formatResponseBlock(roomsQuarta);

  const roomsQuinta = { rooms: await Promise.all(roomsScheduleQuinta) };
  const responseQuinta = formatResponseBlock(roomsQuinta);

  const roomsSexta = { rooms: await Promise.all(roomsScheduleSexta) };
  const responseSexta = formatResponseBlock(roomsSexta);


  const responseModel = [
    { id: 1, day: "Segunda", rooms: responseSegunda },
    { id: 2, day: "Terça", rooms: responseTerca },
    { id: 3, day: "Quarta", rooms: responseQuarta },
    { id: 4, day: "Quinta", rooms: responseQuinta },
    { id: 5, day: "Sexta", rooms: responseSexta },  
  ];

  return responseModel;
}

export async function getStudentsOfSchedulesRoom(day: string, block: number, room: string){
  const teste = await prisma.classes.findMany({
    where: {
      room: {
        blockId: block,
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
    let m1 = data.find((item) => item.scheduleId === 1);
    let m2 = data.find((item) => item.scheduleId === 2);
    let t1 = data.find((item) => item.scheduleId === 3);
    let t2 = data.find((item) => item.scheduleId === 4);
    let n1 = data.find((item) => item.scheduleId === 5);
    let n2 = data.find((item) => item.scheduleId === 6);

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

function formatResponseBlock(obj: {rooms: roomSpot[]}){

  const ra = obj.rooms.filter((item) => item.blockId === 1);
  const rc = obj.rooms.filter((item) => item.blockId === 2);
  const re = obj.rooms.filter((item) => item.blockId === 3);

  const response = [
    {block: "R.A", rooms: ra},
    {block: "R.C", rooms: rc},
    {block: "R.E", rooms: re},
  ];

  return response;
}
