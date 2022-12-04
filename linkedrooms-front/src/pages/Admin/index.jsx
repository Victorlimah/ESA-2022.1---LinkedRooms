import * as S from './styles';

import { GiDiploma } from 'react-icons/gi';
import {FaUniversity} from 'react-icons/fa';
import { AiFillBook } from 'react-icons/ai';
import { BsFillPersonFill, BsTags } from 'react-icons/bs';

export default function Admin(){
  const name = 'Victor';
  const cards = [ "professores", "disciplinas", "salas", "cursos", "tags" ];
  const icons = [<BsFillPersonFill />, <AiFillBook />, <FaUniversity />, <GiDiploma />, <BsTags />];

  return (
    <S.Container>   
      <S.Title>Bem vindo ao painel de admin, {name}</S.Title>
      <S.Cards>
        {cards.map((card, index) => (
          <S.Card onClick={() => goToCrud(card)} key={index}>
            <S.Icon>{icons[index]}</S.Icon>
            <S.CardTitle>{capitalize(card)}</S.CardTitle>
          </S.Card>
        ))}
      </S.Cards>
    </S.Container>
  );

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function goToCrud(entity) {
    window.location.href = `/crud/${entity}`;
  }
}