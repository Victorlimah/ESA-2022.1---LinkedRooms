import {
  TeacherDto,
  BlockDto,
  PeriodDto,
  CourseDto,
  TagDto,
  ScheduleDto,
  RoomDto,
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
  await prisma.$executeRaw`TRUNCATE TABLE "schedules" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "rooms" RESTART IDENTITY CASCADE;`;

  // factory data
  const teachers = teachersFactory();
  const blocks = blocksFactory();
  const periods = periodFactory();
  const courses = coursesFactory();
  const tags = tagsFactory();
  const schedules = schedulesFactory();
  const rooms = roomsFactory();


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

}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

function teachersFactory(): TeacherDto[] {
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
    { number: "102", capacity: 30, blockId: 1 },
    { number: "103", capacity: 30, blockId: 1 },
    { number: "104", capacity: 30, blockId: 1 },
    { number: "105", capacity: 30, blockId: 1 },
    { number: "106", capacity: 30, blockId: 1 },
    { number: "201", capacity: 30, blockId: 1 },
    { number: "202", capacity: 30, blockId: 1 },
    { number: "203", capacity: 30, blockId: 1 },
    { number: "204", capacity: 30, blockId: 1 },
    { number: "205", capacity: 30, blockId: 1 },
    { number: "206", capacity: 30, blockId: 1 },

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

    { number: "101", capacity: 30, blockId: 3 },
    { number: "102", capacity: 30, blockId: 3 },
    { number: "103", capacity: 30, blockId: 3 },
    { number: "104", capacity: 30, blockId: 3 },
    { number: "105", capacity: 30, blockId: 3 },
    { number: "106", capacity: 30, blockId: 3 },
    { number: "201", capacity: 30, blockId: 3 },
    { number: "202", capacity: 30, blockId: 3 },
    { number: "203", capacity: 30, blockId: 3 },
    { number: "204", capacity: 30, blockId: 3 },
    { number: "205", capacity: 30, blockId: 3 },
    { number: "206", capacity: 30, blockId: 3 },
  ];

  return rooms;
}
