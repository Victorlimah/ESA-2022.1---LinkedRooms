import {
  TeacherDto,
  BlockDto,
  PeriodDto,
  CourseDto,
  TagDto,
  ScheduleDto,
  RoomDto,
  TagRoomsDto,
} from "./../src/models/dataDto";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // delete data with reset ids
  await prisma.$executeRaw`TRUNCATE TABLE "teachers" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "blocks" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "period" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "courses" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "tags" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "shedules" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "rooms" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "rooms_tags" RESTART IDENTITY CASCADE;`;

  // factory data
  const teachers = teachersFactory();
  const blocks = blocksFactory();
  const periods = periodFactory();
  const courses = coursesFactory();
  const tags = tagsFactory();
  const schedules = schedulesFactory();
  const rooms = roomsFactory();
  const roomsTags = roomsTagsFactory();


  // insert data
  const teacher = await prisma.teachers.createMany({ data: teachers });
  console.log(`Created ${teacher.count} teachers`);

  const block = await prisma.blocks.createMany({ data: blocks });
  console.log(`Created ${block.count} blocks`);

  const period = await prisma.period.createMany({ data: periods });
  console.log(`Created ${period.count} periods`);

  const course = await prisma.courses.createMany({ data: courses });
  console.log(`Created ${course.count} courses`);

  const tag = await prisma.tags.createMany({ data: tags });
  console.log(`Created ${tag.count} tags`);

  const schedule = await prisma.schedule.createMany({ data: schedules });
  console.log(`Created ${schedule.count} schedules`);

  const room = await prisma.rooms.createMany({ data: rooms });
  console.log(`Created ${room.count} rooms`);

  const roomTag = await prisma.roomsTags.createMany({ data: roomsTags });
  console.log(`Created ${roomTag.count} roomsTags`);

}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

function teachersFactory() {
  const nameTeachers = `ALEXANDRE SCAICO
  ANA LIZ SOUTO OLIVEIRA
  ANALIA CRISTINA BEZERRA TIBURTINO MEIRA
  ANTONIO ALBERTO PEREIRA
  AUGUSTO CESAR PEREIRA DA SILVA MONTALVAO
  AYLA DEBORA DANTAS DE SOUZA REBOUCAS
  BALTAZAR MACAIBA DE SOUSA
  CARLA ALECSANDRA DE MELO BONIFACIO
  DANIEL FAUSTINO LACERDA DE SOUZA
  DANIEL SOUZA COELHO
  ELAINE REIS LAUREANO
  FLAVIA VELOSO COSTA SOUZA
  GERALDO ALEXANDRE DE OLIVEIRA GOMES
  GILMAR LEITE FERREIRA
  JOELSON NOGUEIRA DE CARVALHO
  JOSE ADSON OLIVEIRA GUEDES DA CUNHA
  JOSE LAUDELINO DE MENEZES NETO
  JULIANA ARAGAO DE ARAUJO
  KLEYBER DANTAS TORRES DE ARAUJO
  LUIZ MAURICIO FRAGA MARTINS
  LUZIANA MARQUES DA FONSECA SILVA
  MARCELLE BATISTA MARTINS DOS SANTOS
  MARCUS WILLIAMS AQUINO DE CARVALHO
  MARIA DA PENHA CAETANO DE FIGUEIREDO GILL
  MARIA VALDENICE RESENDE SOARES
  PASQUELINE DANTAS SCAICO
  PATRICIA SILVA NASCIMENTO BARROS
  PAULO ROBERTO PALHANO SILVA
  RAFAEL MARROCOS MAGALHAES
  RAQUEL VIGOLVINO LOPES
  RENATA MONTEIRO GARCIA
  RODRIGO REBOUCAS DE ALMEIDA
  ROSIELE FERNANDES PINTO
  SAWANA ARAUJO LOPES DE SOUZA
  SURAMA SANTOS ISMAEL DA COSTA
  THAISE KELLY DE LIMA COSTA
  THEOFILO MOREIRA BARRETO DE OLIVEIRA
  THEREZA PATRICIA PEREIRA PADILHA
  VANESSA FARIAS DANTAS
  WAGNER EMANOEL COSTA
  WALQUIRIA NASCIMENTO DA SILVA`;

  const teachers = nameTeachers.split("\n").map((name) => {
    return { name };
  });

  return teachers;
}

function blocksFactory() {
  const blocks: BlockDto[] = [
    { name: "R.A" },
    { name: "R.C" },
    { name: "R.E" },
  ];

  return blocks;
}

function periodFactory(){
  const periods: PeriodDto[] = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
    { number: 9 }
  ];

  return periods;
}

function coursesFactory(){
  const courses: CourseDto[] = [
    { name: "Bacharelado em Sistemas de Informação" },
    { name: "Licenciatura em Ciência da Computação" },
  ];

  return courses;
}

function tagsFactory(){
  const tags: TagDto[] = [
    { name: "AR CONDICIONADO" },
    { name: "VENTILADOR" },
    { name: "PROJETOR" },
    { name: "SI (M/T)" },
    { name: "LCC (M/T)" },
    { name: "MATEMATICA (N)" },
  ];

  return tags;
}

function schedulesFactory(){
  const schedules: ScheduleDto[] = [
    { schedule: "08:00 - 10:00", day: "SEGUNDA" },
    { schedule: "10:00 - 12:00", day: "SEGUNDA" },
    { schedule: "13:00 - 15:00", day: "SEGUNDA" },
    { schedule: "15:00 - 17:00", day: "SEGUNDA" },
    { schedule: "19:00 - 20:40", day: "SEGUNDA" },
    { schedule: "20:40 - 22:40", day: "SEGUNDA" },

    { schedule: "08:00 - 10:00", day: "TERÇA" },
    { schedule: "10:00 - 12:00", day: "TERÇA" },
    { schedule: "13:00 - 15:00", day: "TERÇA" },
    { schedule: "15:00 - 17:00", day: "TERÇA" },
    { schedule: "19:00 - 20:40", day: "TERÇA" },
    { schedule: "20:40 - 22:40", day: "TERÇA" },

    { schedule: "08:00 - 10:00", day: "QUARTA" },
    { schedule: "10:00 - 12:00", day: "QUARTA" },
    { schedule: "13:00 - 15:00", day: "QUARTA" },
    { schedule: "15:00 - 17:00", day: "QUARTA" },
    { schedule: "19:00 - 20:40", day: "QUARTA" },
    { schedule: "20:40 - 22:40", day: "QUARTA" },

    { schedule: "08:00 - 10:00", day: "QUINTA" },
    { schedule: "10:00 - 12:00", day: "QUINTA" },
    { schedule: "13:00 - 15:00", day: "QUINTA" },
    { schedule: "15:00 - 17:00", day: "QUINTA" },
    { schedule: "19:00 - 20:40", day: "QUINTA" },
    { schedule: "20:40 - 22:40", day: "QUINTA" },

    { schedule: "08:00 - 10:00", day: "SEXTA" },
    { schedule: "10:00 - 12:00", day: "SEXTA" },
    { schedule: "13:00 - 15:00", day: "SEXTA" },
    { schedule: "15:00 - 17:00", day: "SEXTA" },
    { schedule: "19:00 - 20:40", day: "SEXTA" },
    { schedule: "20:40 - 22:40", day: "SEXTA" },
  ];

  return schedules;
}

function roomsFactory(){
  const rooms: RoomDto[] = [
    { number: "101", capacity: 30, blockId: 1 },
    { number: "102", capacity: 40, blockId: 1 },
    { number: "103", capacity: 20, blockId: 1 },
    { number: "104", capacity: 45, blockId: 1 },
    { number: "105", capacity: 30, blockId: 1 },
    { number: "106", capacity: 35, blockId: 1 },
    { number: "201", capacity: 35, blockId: 1 },
    { number: "202", capacity: 40, blockId: 1 },
    { number: "203", capacity: 30, blockId: 1 },
    { number: "204", capacity: 40, blockId: 1 },
    { number: "205", capacity: 40, blockId: 1 },
    { number: "206", capacity: 40, blockId: 1 },

    { number: "101", capacity: 30, blockId: 2 },
    { number: "102", capacity: 30, blockId: 2 },
    { number: "103", capacity: 30, blockId: 2 },
    { number: "104", capacity: 30, blockId: 2 },
    { number: "105", capacity: 30, blockId: 2 },
    { number: "106", capacity: 30, blockId: 2 },
    { number: "201", capacity: 30, blockId: 2 },
    { number: "202", capacity: 30, blockId: 2 },
    { number: "203", capacity: 30, blockId: 2 },
    { number: "204", capacity: 30, blockId: 2 },
    { number: "205", capacity: 30, blockId: 2 },
    { number: "206", capacity: 30, blockId: 2 },

    { number: "101", capacity: 45, blockId: 3 },
    { number: "102", capacity: 70, blockId: 3 },
    { number: "103", capacity: 70, blockId: 3 },
    { number: "104", capacity: 45, blockId: 3 },
    { number: "105", capacity: 70, blockId: 3 },
    { number: "106", capacity: 65, blockId: 3 },
    { number: "201", capacity: 65, blockId: 3 },
    { number: "202", capacity: 70, blockId: 3 },
    { number: "203", capacity: 70, blockId: 3 },
    { number: "204", capacity: 55, blockId: 3 },
    { number: "205", capacity: 70, blockId: 3 },
    { number: "206", capacity: 70, blockId: 3 },
  ];

  return rooms;
}

function roomsTagsFactory() {
  const ac: TagRoomsDto[] = [
    { tagId: 3, roomId: 3 },
    { tagId: 3, roomId: 4 },
    { tagId: 3, roomId: 5 },
    { tagId: 3, roomId: 6 },
    { tagId: 3, roomId: 7 },
    { tagId: 3, roomId: 8 },
    { tagId: 3, roomId: 10 },
    { tagId: 3, roomId: 11 },
    { tagId: 3, roomId: 12 },
    { tagId: 3, roomId: 13 },
    { tagId: 1, roomId: 14 },
    { tagId: 1, roomId: 15 },
    { tagId: 1, roomId: 16 },
    { tagId: 1, roomId: 17 },
    { tagId: 1, roomId: 18 },
    { tagId: 1, roomId: 19 },
    { tagId: 1, roomId: 20 },
    { tagId: 1, roomId: 21 },
    { tagId: 1, roomId: 22 },
    { tagId: 1, roomId: 25 },
    { tagId: 1, roomId: 26 },
    { tagId: 1, roomId: 27 },
    { tagId: 1, roomId: 34 },
    { tagId: 1, roomId: 35 },
  ];

  const fan: TagRoomsDto[] = [
    { tagId: 2, roomId: 1 },
    { tagId: 2, roomId: 2 },
    { tagId: 2, roomId: 3 },
    { tagId: 2, roomId: 4 },
    { tagId: 2, roomId: 5 },
    { tagId: 2, roomId: 6 },
    { tagId: 2, roomId: 7 },
    { tagId: 2, roomId: 9 },
    { tagId: 2, roomId: 10 },
    { tagId: 2, roomId: 11 },
    { tagId: 2, roomId: 12 },
    { tagId: 2, roomId: 13 },
    { tagId: 2, roomId: 14 },
    { tagId: 2, roomId: 15 },
    { tagId: 2, roomId: 16 },
    { tagId: 2, roomId: 17 },
    { tagId: 2, roomId: 18 },
    { tagId: 2, roomId: 19 },
    { tagId: 2, roomId: 20 },
    { tagId: 2, roomId: 21 },
    { tagId: 2, roomId: 22 },
    { tagId: 2, roomId: 23 },
    { tagId: 2, roomId: 24 },
    { tagId: 2, roomId: 25 },
    { tagId: 2, roomId: 26 },
    { tagId: 2, roomId: 27 },
    { tagId: 2, roomId: 28 },
    { tagId: 2, roomId: 29 },
    { tagId: 2, roomId: 30 },
    { tagId: 2, roomId: 31 },
    { tagId: 2, roomId: 32 },
    { tagId: 2, roomId: 33 },
    { tagId: 2, roomId: 34 },
    { tagId: 2, roomId: 35 },
    { tagId: 2, roomId: 36 },
  ];

  const projector: TagRoomsDto[] = [
    { tagId: 3, roomId: 1 },
    { tagId: 3, roomId: 2 },
    { tagId: 3, roomId: 3 },
    { tagId: 3, roomId: 4 },
    { tagId: 3, roomId: 5 },
    { tagId: 3, roomId: 6 },
    { tagId: 3, roomId: 7 },
    { tagId: 3, roomId: 8 },
    { tagId: 3, roomId: 9 },
    { tagId: 3, roomId: 10 },
    { tagId: 3, roomId: 11 },
    { tagId: 3, roomId: 12 },
    { tagId: 3, roomId: 13 },
    { tagId: 3, roomId: 14 },
    { tagId: 3, roomId: 15 },
    { tagId: 3, roomId: 16 },
    { tagId: 3, roomId: 17 },
    { tagId: 3, roomId: 18 },
    { tagId: 3, roomId: 19 },
    { tagId: 3, roomId: 20 },
    { tagId: 3, roomId: 21 },
    { tagId: 3, roomId: 22 },
    { tagId: 3, roomId: 23 },
    { tagId: 3, roomId: 24 },
    { tagId: 3, roomId: 25 },
    { tagId: 3, roomId: 26 },
    { tagId: 3, roomId: 27 },
    { tagId: 3, roomId: 28 },
    { tagId: 3, roomId: 29 },
    { tagId: 3, roomId: 30 },
    { tagId: 3, roomId: 31 },
    { tagId: 3, roomId: 32 },
    { tagId: 3, roomId: 33 },
    { tagId: 3, roomId: 34 },
    { tagId: 3, roomId: 35 },
    { tagId: 3, roomId: 36 },
  ];

  return [...ac, ...fan, ...projector];
}