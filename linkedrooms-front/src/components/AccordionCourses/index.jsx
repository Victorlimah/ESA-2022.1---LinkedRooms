import * as React from 'react';
import * as S from './styles';

import Swal from 'sweetalert2';

import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


export default function AccordionCourses() {

  const courses = [
    {
      course: 'Bacharelado em Sistemas de Informação',
      classes: [
        {
          id: 1,
          name: '1º Período',
        },
        {
          id: 2,
          name: '2º Período',
        },
        {
          id: 3,
          name: '3º Período',
        },
        {
          id: 4,
          name: '4º Período',
        },
        {
          id: 5,
          name: '5º Período',
        },
        {
          id: 6,
          name: '6º Período',
        },
        {
          id: 7,
          name: '7º Período',
        },
        {
          id: 8,
          name: '8º Período',
        },
      ],
    },
    {
      course: 'Licenciatura em Ciência da Computação',
      classes: [
        {
          id: 11,
          name: '1º Período',
        },
        {
          id: 12,
          name: '2º Período',
        },
        {
          id: 13,
          name: '3º Período',
        },
        {
          id: 14,
          name: '4º Período',
        },
        {
          id: 15,
          name: '5º Período',
        },
        {
          id: 16,
          name: '6º Período',
        },
        {
          id: 17,
          name: '7º Período',
        },
        {
          id: 18,
          name: '8º Período',
        },
        {
          id: 19,
          name: '9º Período',
        },
      ],
    },
  ];

  return (
    <S.Container>
      {courses.map((course) => (
        <Accordion className='accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{course.course}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='rooms'>
              {course.classes.map((room) => (
                <Button onClick={() => openPeriod(room.name)} variant="contained">{room.name}</Button>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </S.Container>
  );

  function openPeriod(period) {
    Swal.fire({
      title: period,
      width: 900,
      html: `
      <table>
        <tr>
          <th>HORA</th>
          <th>SEGUNDA</th>
          <th>TERÇA</th>
          <th>QUARTA</th>
          <th>QUINTA</th>
          <th>SEXTA</th>
        </tr>
        <tr>
          <td>08:00 - 09:00</td>
          <td>DCET00233</td>
          <td></td>
          <td>8103106</td>
          <td></td>
          <td>8103106</td>
        </tr>
        <tr>
          <td>09:00 - 10:00</td>
          <td></td>
          <td></td>
          <td>8103106</td>
          <td></td>
          <td>8103106</td>
        </tr>
        <tr>
          <td>10:00 - 11:00</td>
          <td>8103104</td>
          <td></td>
          <td></td>
          <td></td>
          <td>8103104</td>
        </tr>
        <tr>
          <td>11:00 - 12:00</td>
          <td>8103104</td>
          <td></td>
          <td></td>
          <td></td>
          <td>8103104</td>
        </tr>
        <tr>
          <td>13:00 - 14:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>14:00 - 15:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>15:00 - 16:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>16:00 - 17:00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>        
      </table>      
      `,
      showCloseButton: true,

    });
  }

  function teste(){
    Swal.fire({
      title: '8103106',
      width: 900,
      text: 'Aula de Desenvolvimento de Sistemas',
      showCloseButton: true,
    });
  }
}
