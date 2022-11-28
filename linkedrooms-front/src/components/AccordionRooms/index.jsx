import * as S from './styles';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { BsSnow, BsWind } from 'react-icons/bs';
import { FcVideoProjector } from 'react-icons/fc';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import data from '../../services/mock/data';
import { GetRooms } from '../../services/api/roomsService';

export default function AccordionRooms() {
  const navigate = useNavigate();
  const [indexDay, setIndexDay] = useState(0);

  function incrementDay() {
    if (indexDay === data.length - 1) setIndexDay(0);
    else setIndexDay(indexDay + 1);
  }

  function decrementDay() {
    if(indexDay === 0) setIndexDay(data.length - 1);
    else setIndexDay(indexDay - 1);
  }


  useEffect(() => {
    async function getRooms() {
      const response = await GetRooms();
      setTeste(response);
    }
    getRooms();
  }, []);

  const [teste, setTeste] = useState(data);

  return (
    <S.Container>
      {teste[indexDay].rooms.map((turma) => (
        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography id="name-block">{turma.block}</Typography>
          </AccordionSummary>
          <S.Day>
            <span onClick={() => decrementDay()}>
              <ArrowBackIosIcon />
            </span>

            <Typography id="text">{teste[indexDay].day}</Typography>

            <span onClick={() => incrementDay()}>
              <ArrowForwardIosIcon />
            </span>
          </S.Day>
          <AccordionDetails>
            <Typography className='rooms'>
              {turma.rooms.map((room) => (
                <Button onClick={() => openRoom(room.number)} variant="contained">
                  <S.Capacity>{room.capacity}</S.Capacity>
                  <S.Icons>
                    <BsSnow />
                    <BsWind />
                    <FcVideoProjector/>
                  </S.Icons>
                  <S.RoomNumber>{room.number}</S.RoomNumber>
                  <S.IndicatorGroup>
                    {room.students?.map((student, index) => (
                      <S.Indicator key={index} students={student} capacity={room.capacity}>
                        {student}
                      </S.Indicator>
                    ))}
                  </S.IndicatorGroup>
                </Button>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </S.Container>
  );

  function openRoom(roomNumber) {
    navigate(`/room/${roomNumber}`);
  }
}
