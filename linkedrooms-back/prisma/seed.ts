import { TeacherDto, BlockDto, PeriodDto, CourseDto, TagDto } from "./../src/models/dataDto";
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

  // factory data
  const teachers = teachersFactory();
  const blocks = blocksFactory();
  const periods = periodFactory();
  const courses = coursesFactory();
  const tags = tagsFactory();

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
    { name: "SI" },
    { name: "LCC" },
    { name: "AR CONDICIONADO" },
    { name: "VENTILADOR" },
    { name: "PROJETOR" },
  ];

  return tags;
}