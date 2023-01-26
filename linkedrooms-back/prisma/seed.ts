import {
  TeacherDto,
  BlockDto,
  PeriodDto,
  CourseDto,
  TagDto,
  ScheduleDto,
  RoomDto,
  TagRoomsDto,
  ClassDto,
  DisciplineDto,
} from "./../src/models/dataDto";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // delete data with reset ids
  await prisma.$executeRaw`TRUNCATE TABLE "tags" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "rooms" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "blocks" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "period" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "courses" RESTART IDENTITY CASCADE;`;
  // await prisma.$executeRaw`TRUNCATE TABLE "classes" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "teachers" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "schedules" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "rooms_tags" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "disciplines" RESTART IDENTITY CASCADE;`;

  // factory data
  const tags = tagsFactory();
  const rooms = roomsFactory();
  const blocks = blocksFactory();
  const periods = periodFactory();
  const courses = coursesFactory();
  // const classes = classesFactory();
  const teachers = teachersFactory();
  const schedules = schedulesFactory();
  const roomsTags = roomsTagsFactory();
  const disciplines = disciplinesFactory();

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

  const discipline = await prisma.disciplines.createMany({ data: disciplines });
  console.log(`Created ${discipline.count} disciplines`);

  // const classe = await prisma.classes.createMany({ data: classes });
  // console.log(`Created ${classe.count} classes`);
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
    { name: "SI" },
    { name: "LCC" },
    { name: "MATEMATICA" },
    { name: "ECOLOGIA" },
    { name: "ANTROPOLOGIA" },
    { name: "DESIGN" },
    { name: "DESIGN (PRANCHETAS)" },
    { name: "LAB MATERIAIS/ROBOTICA/ECOLOGIA" },
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
 
const response: TagRoomsDto[] = [
{ tagId: 2, roomId: 0 },
{ tagId: 6, roomId: 0 },
{ tagId: 5, roomId: 0 },
{ tagId: 1, roomId: 1 },
{ tagId: 2, roomId: 1 },
{ tagId: 6, roomId: 1 },
{ tagId: 5, roomId: 1 },
{ tagId: 0, roomId: 2 },
{ tagId: 1, roomId: 2 },
{ tagId: 2, roomId: 2 },
{ tagId: 8, roomId: 2 },
{ tagId: 5, roomId: 2 },
{ tagId: 0, roomId: 3 },
{ tagId: 1, roomId: 3 },
{ tagId: 2, roomId: 3 },
{ tagId: 6, roomId: 3 },
{ tagId: 5, roomId: 3 },
{ tagId: 0, roomId: 4 },
{ tagId: 1, roomId: 4 },
{ tagId: 6, roomId: 4 },
{ tagId: 0, roomId: 5 },
{ tagId: 1, roomId: 5 },
{ tagId: 2, roomId: 5 },
{ tagId: 3, roomId: 5 },
{ tagId: 7, roomId: 5 },
{ tagId: 0, roomId: 6 },
{ tagId: 1, roomId: 6 },
{ tagId: 2, roomId: 6 },
{ tagId: 3, roomId: 6 },
{ tagId: 7, roomId: 6 },
{ tagId: 0, roomId: 7 },
{ tagId: 2, roomId: 7 },
{ tagId: 3, roomId: 7 },
{ tagId: 7, roomId: 7 },
{ tagId: 0, roomId: 8 },
{ tagId: 2, roomId: 8 },
{ tagId: 3, roomId: 8 },
{ tagId: 7, roomId: 8 },
{ tagId: 0, roomId: 9 },
{ tagId: 2, roomId: 9 },
{ tagId: 3, roomId: 9 },
{ tagId: 7, roomId: 9 },
{ tagId: 0, roomId: 10 },
{ tagId: 2, roomId: 10 },
{ tagId: 4, roomId: 10 },
{ tagId: 5, roomId: 10 },
{ tagId: 0, roomId: 11 },
{ tagId: 2, roomId: 11 },
{ tagId: 8, roomId: 11 },
{ tagId: 5, roomId: 11 },
{ tagId: 0, roomId: 18 },
{ tagId: 2, roomId: 18 },
{ tagId: 0, roomId: 19 },
{ tagId: 2, roomId: 19 },
{ tagId: 0, roomId: 20 },
{ tagId: 2, roomId: 20 },
{ tagId: 0, roomId: 21 },
{ tagId: 2, roomId: 21 },
{ tagId: 0, roomId: 22 },
{ tagId: 2, roomId: 22 },
{ tagId: 0, roomId: 23 },
{ tagId: 2, roomId: 23 },
{ tagId: 8, roomId: 24 },
{ tagId: 9, roomId: 24 },
{ tagId: 8, roomId: 25 },
{ tagId: 9, roomId: 25 },
{ tagId: 0, roomId: 26 },
{ tagId: 1, roomId: 26 },
{ tagId: 2, roomId: 26 },
{ tagId: 3, roomId: 26 },
{ tagId: 5, roomId: 26 },
{ tagId: 1, roomId: 27 },
{ tagId: 2, roomId: 27 },
{ tagId: 3, roomId: 27 },
{ tagId: 5, roomId: 27 },
{ tagId: 1, roomId: 28 },
{ tagId: 6, roomId: 28 },
{ tagId: 5, roomId: 28 },
{ tagId: 1, roomId: 29 },
{ tagId: 6, roomId: 29 },
{ tagId: 5, roomId: 29 },
{ tagId: 1, roomId: 30 },
{ tagId: 4, roomId: 30 },
{ tagId: 1, roomId: 31 },
{ tagId: 4, roomId: 31 },
{ tagId: 10, roomId: 32 },
{ tagId: 0, roomId: 33 },
{ tagId: 1, roomId: 33 },
{ tagId: 2, roomId: 33 },
{ tagId: 0, roomId: 34 },
{ tagId: 1, roomId: 34 },
{ tagId: 1, roomId: 35 }
];

  return response;
}

function disciplinesFactory(){
  const disciplines: DisciplineDto[] = [
    { name: "ENGENHARIA DE SOFTWARE APLICADA", code: "8103155", workload: 60 },
    { name: "INTRODUCAO A PROGRAMACAO", code: "8103104", workload: 60 },
    { name: "ENGENHARIA DE SOFTWARE", code: "8103151", workload: 60 },
    { name: "MODELAGEM DE DADOS", code: "8103169", workload: 60 },
    { name: "ARQUITETURA DE COMPUTADORES I", code: "8103126", workload: 60 },
    { name: "LINGUAGEM DE PROGRAMACAO", code: "8103125", workload: 60 },
    { name: "INGLES INSTRUMENTAL", code: "8105003", workload: 60 },
    {
      name: "AUDITORIA E SEGURANCA DE SISTEMAS",
      code: "8103209",
      workload: 60,
    },
    {
      name: "DESENVOLVIMENTOS DE SIST CORPORATIVOS",
      code: "8103218",
      workload: 60,
    },
    { name: "REDES DE COMPUTADORES", code: "8103152", workload: 60 },
    { name: "PORTUGUES INSTRUMENTAL", code: "8105002", workload: 60 },
    { name: "INTRODUCAO A PSICOLOGIA", code: "8101177", workload: 60 },
    {
      name: "PESQUISA APLIC A SISTEMAS DE INFORMACAO",
      code: "8103145",
      workload: 60,
    },
    { name: "MATEMÁTICA DISCRETA", code: "DCET00233", workload: 60 },
    { name: "ALGEBRA LINEAR", code: "8103135", workload: 60 },
    { name: "EMPREENDEDORISMO", code: "8108113", workload: 60 },
    { name: "SISTEMAS DE APOIO A GESTÃO", code: "8103160", workload: 60 },
    { name: "INTRODUCAO A SOCIOLOGIA", code: "8101105", workload: 60 },
    { name: "GESTÃO DA QUALIDADE DE SOFTWARE", code: "8103220", workload: 60 },
    { name: "METODOLOGIA CIENTÍFICA", code: "8101306", workload: 60 },
    { name: "ANÁLISE DE DADOS I", code: "GDCET0100", workload: 60 },
    { name: "SISTEMAS DISTRIBUIDOS", code: "8103161", workload: 60 },
    { name: "PROBABILIDADE E ESTATISTICA", code: "8103147", workload: 60 },
    {
      name: "INTELIG ARTIFICIAL E SIST ESPECIALISTAS",
      code: "8103157",
      workload: 60,
    },
    { name: "INTRODUCAO AO COMPUTADOR", code: "8103106", workload: 60 },
    { name: "SISTEMAS OPERACIONAIS", code: "8103215", workload: 60 },
    { name: "PROGRAMACAO ORIENTADA A OBJETOS", code: "8103138", workload: 60 },
    { name: "ADMINISTRAÇÃO I", code: "8108108", workload: 60 },
    { name: "ETICA PROFISSIONAL", code: "8101231", workload: 60 },
    { name: "LOGICA APLICADA A COMPUTACAO", code: "8103139", workload: 60 },
    { name: "BANCO DE DADOS", code: "8103174", workload: 60 },
    {
      name: "ALGORITMOS E ESTRUTURA DE DADOS I",
      code: "8103141",
      workload: 60,
    },
    { name: "LIBRAS", code: "8105031", workload: 60 },
    { name: "ANALISE E PROJETOS DE SISTEMAS", code: "8103180", workload: 60 },
    { name: "ARQUITETURA DE COMPUTADORES II", code: "8103136", workload: 60 },
    { name: "AVALIAÇÃO DA APRENDIZAGEM", code: "8102163", workload: 60 },
    { name: "CALCULO I", code: "8103115", workload: 90 },
    { name: "CALCULO II", code: "8103123", workload: 90 },
    {
      name: "CÁLCULO VETORIAL E GEOMETRIA ANALÍTICA",
      code: "8103101",
      workload: 60,
    },
    { name: "COMPUTADORES E SOCIEDADE", code: "8101236", workload: 30 },
    { name: "CURRÍCULO E TRABALHO PEDAGÓGICO", code: "8102162", workload: 60 },
    { name: "DIDÁTICA", code: "8102108", workload: 60 },
    { name: "ESTRUTURA DE DADOS", code: "8103137", workload: 60 },
    {
      name: "FUNDAMENTOS ANTROFILOSÓFICOS DA EDUCAÇÃO",
      code: "8102100",
      workload: 60,
    },
    {
      name: "FUNDAMENTOS PSICOLÓGICOS DA EDUCAÇÃO",
      code: "8102107",
      workload: 60,
    },
    {
      name: "FUNDAMENTOS SOCIO-HISTÓRICOS DA EDUCAÇÃO",
      code: "8102106",
      workload: 60,
    },
    { name: "INTELIGENCIA ARTIFICIAL", code: "8103181", workload: 60 },
    { name: "LINGUAGENS DECLARATIVAS", code: "8103167", workload: 60 },
    { name: "PESQUISA APLICADA A COMPUTACAO", code: "8103166", workload: 60 },
    { name: "POLÍTICA E GESTÃO DA EDUCAÇÃO", code: "8102126", workload: 60 },
    {
      name: "PRODUCAO DE MATERIAIS INSTRUCIONAIS",
      code: "8103182",
      workload: 60,
    },
    { name: "SISTEMAS MULTIMIDIA", code: "8103179", workload: 60 },
    { name: "METODOLOGIA CIENTIFICA", code: "8103111", workload: 45 },
  ];

  return disciplines;
}

function classesFactory(){
  const classes: ClassDto[] = [
    {
      teacherId: 22,
      roomId: 8,
      students: 33,
      disciplineId: 19,
      scheduleId: 9,
      schoolYear: "2022.1",
    },
    {
      teacherId: 22,
      roomId: 8,
      students: 33,
      disciplineId: 19,
      scheduleId: 10,
      schoolYear: "2022.1",
    },
    {
      teacherId: 38,
      roomId: 9,
      students: 46,
      disciplineId: 30,
      scheduleId: 9,
      schoolYear: "2022.1",
    },
    {
      teacherId: 38,
      roomId: 9,
      students: 46,
      disciplineId: 30,
      scheduleId: 21,
      schoolYear: "2022.1",
    },
    {
      teacherId: 11,
      roomId: 10,
      students: 34,
      disciplineId: 11,
      scheduleId: 3,
      schoolYear: "2022.1",
    },
    {
      teacherId: 11,
      roomId: 10,
      students: 34,
      disciplineId: 11,
      scheduleId: 4,
      schoolYear: "2022.1",
    },
    {
      teacherId: 3,
      roomId: 10,
      students: 42,
      disciplineId: 4,
      scheduleId: 7,
      schoolYear: "2022.1",
    },
    {
      teacherId: 3,
      roomId: 10,
      students: 42,
      disciplineId: 4,
      scheduleId: 20,
      schoolYear: "2022.1",
    },
    {
      teacherId: 5,
      roomId: 10,
      students: 44,
      disciplineId: 5,
      scheduleId: 14,
      schoolYear: "2022.1",
    },
    {
      teacherId: 5,
      roomId: 10,
      students: 44,
      disciplineId: 5,
      scheduleId: 19,
      schoolYear: "2022.1",
    },
    {
      teacherId: 37,
      roomId: 10,
      students: 59,
      disciplineId: 29,
      scheduleId: 25,
      schoolYear: "2022.1",
    },
    {
      teacherId: 37,
      roomId: 10,
      students: 59,
      disciplineId: 29,
      scheduleId: 26,
      schoolYear: "2022.1",
    },
    {
      teacherId: 20,
      roomId: 11,
      students: 23,
      disciplineId: 17,
      scheduleId: 2,
      schoolYear: "2022.1",
    },
    {
      teacherId: 20,
      roomId: 11,
      students: 23,
      disciplineId: 17,
      scheduleId: 3,
      schoolYear: "2022.1",
    },
    {
      teacherId: 23,
      roomId: 11,
      students: 20,
      disciplineId: 22,
      scheduleId: 8,
      schoolYear: "2022.1",
    },
    {
      teacherId: 23,
      roomId: 19,
      students: 20,
      disciplineId: 22,
      scheduleId: 25,
      schoolYear: "2022.1",
    },
    {
      teacherId: 9,
      roomId: 11,
      students: 24,
      disciplineId: 8,
      scheduleId: 14,
      schoolYear: "2022.1",
    },
    {
      teacherId: 9,
      roomId: 20,
      students: 24,
      disciplineId: 8,
      scheduleId: 25,
      schoolYear: "2022.1",
    },
    {
      teacherId: 41,
      roomId: 11,
      students: 43,
      disciplineId: 33,
      scheduleId: 15,
      schoolYear: "2022.1",
    },
    {
      teacherId: 41,
      roomId: 11,
      students: 43,
      disciplineId: 33,
      scheduleId: 16,
      schoolYear: "2022.1",
    },
    {
      teacherId: 23,
      roomId: 19,
      students: 12,
      disciplineId: 21,
      scheduleId: 7,
      schoolYear: "2022.1",
    },
    {
      teacherId: 23,
      roomId: 11,
      students: 12,
      disciplineId: 21,
      scheduleId: 27,
      schoolYear: "2022.1",
    },
    {
      teacherId: 9,
      roomId: 20,
      students: 24,
      disciplineId: 9,
      scheduleId: 13,
      schoolYear: "2022.1",
    },
    {
      teacherId: 9,
      roomId: 11,
      students: 24,
      disciplineId: 9,
      scheduleId: 20,
      schoolYear: "2022.1",
    },
    {
      teacherId: 2,
      roomId: 19,
      students: 50,
      disciplineId: 2,
      scheduleId: 2,
      schoolYear: "2022.1",
    },
    {
      teacherId: 2,
      roomId: 20,
      students: 50,
      disciplineId: 2,
      scheduleId: 26,
      schoolYear: "2022.1",
    },
    {
      teacherId: 29,
      roomId: 19,
      students: 15,
      disciplineId: 24,
      scheduleId: 26,
      schoolYear: "2022.1",
    },
    {
      teacherId: 29,
      roomId: 19,
      students: 15,
      disciplineId: 24,
      scheduleId: 9,
      schoolYear: "2022.1",
    },
    {
      teacherId: 32,
      roomId: 20,
      students: 46,
      disciplineId: 27,
      scheduleId: 1,
      schoolYear: "2022.1",
    },
    {
      teacherId: 32,
      roomId: 19,
      students: 46,
      disciplineId: 27,
      scheduleId: 13,
      schoolYear: "2022.1",
    },
    {
      teacherId: 40,
      roomId: 20,
      students: 46,
      disciplineId: 32,
      scheduleId: 8,
      schoolYear: "2022.1",
    },
    {
      teacherId: 40,
      roomId: 27,
      students: 46,
      disciplineId: 32,
      scheduleId: 19,
      schoolYear: "2022.1",
    },
  ];

  return classes;
}
