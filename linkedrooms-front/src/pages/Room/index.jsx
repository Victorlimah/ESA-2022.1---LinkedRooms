import * as S from './styles';

import Header from '../../components/Header';

import { useState, useEffect } from 'react';

import { getClassesByRoomId } from '../../services/api/classesService';

export default function Room() {
  const [day, setDay] = useState('segunda');
  // a url da rota é /rooms/:blockId/:number
  // o :blockId é o id do bloco e o :number é o número da sala
  const blockId = window.location.pathname.split('/')[2];
  const number = window.location.pathname.split('/')[3];

  const data = {
    name: "R.A 201", tags: ["SI", "AR CONDICIONADO"], capacity: 30,
    segunda: [
      {
        disciplina: { code: 123, nome: "PASi", professor: "Adson", alunos: 30 },
        schedules: "13:00 - 15:00",
      },
      {
        disciplina: { code: 123, nome: "Redes", professor: "Daniel", alunos: 30 },
        schedules: "10:00 - 12:00",
      }
    ],
    terca: [],
    quarta: [
      {
        disciplina: { code: 123, nome: "PASi", professor: "Adson", alunos: 30 },
        schedules: "13:00 - 15:00",
      },
      {
        disciplina: { code: 123, nome: "Redes", professor: "Daniel", alunos: 30 },
        schedules: "10:00 - 12:00",
      }],
    quinta: [],
    sexta: [],
  }

  const [data2, setData2] = useState(data);

  useEffect(() => {
    async function getClasses() {
      const response = await getClassesByRoomId(blockId, number);
      setData2(response);
    }
    getClasses();
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.NameRoom>{data2?.name}</S.NameRoom>
        <S.Tags>
          <S.Tag>CAPACIDADE: {data2?.capacity}</S.Tag>
          {data2?.tags?.map((tag, index) => (
            <S.Tag key={index}>{tag}</S.Tag>
          ))}
        </S.Tags>
        <S.Day>
          <S.DayButton onSelect={day === 'segunda'} onClick={() => setDay('segunda')}>Segunda</S.DayButton>
          <S.DayButton onSelect={day === 'terca'} onClick={() => setDay('terca')}>Terça</S.DayButton>
          <S.DayButton onSelect={day === 'quarta'} onClick={() => setDay('quarta')}>Quarta</S.DayButton>
          <S.DayButton onSelect={day === 'quinta'} onClick={() => setDay('quinta')}>Quinta</S.DayButton>
          <S.DayButton onSelect={day === 'sexta'} onClick={() => setDay('sexta')}>Sexta</S.DayButton>
        </S.Day>

        {data2[day]?.map((item) => (
          <S.Card>
            <S.CardHeader>
              <S.CardSubtitle>{item.code}</S.CardSubtitle>
              <S.CardTitle>{item.name}</S.CardTitle>
              <S.CardSubtitle>{item.teacher}</S.CardSubtitle>
            </S.CardHeader>
            <S.CardBody>
              <S.CardText>{item.schedule}</S.CardText>
              <S.CardText>{item.students} alunos</S.CardText>
            </S.CardBody>
          </S.Card>
        ))}

        {data2[day]?.length === 0 && (
          <S.Card>
            <S.CardHeader>
              <S.CardTitle>Nenhuma aula cadastrada</S.CardTitle>
              </S.CardHeader>
              </S.Card>
              )}
      </S.Container>
    </>
  );
}
