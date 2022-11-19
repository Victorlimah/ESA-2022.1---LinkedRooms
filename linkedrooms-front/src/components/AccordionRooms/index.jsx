import * as S from './styles';
import * as React from 'react';

import { useState } from 'react';
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

  const data = [
    {
      id: 2,
      day: 'Segunda',
      rooms: [
        {
          block: 'R.A',
          rooms: [
            {
              id: 1,
              number: '101',
              capacity: 40,
              students: [50, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '102',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '103',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '104',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '105',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '106',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 1,
              number: '201',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '202',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '203',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '204',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '205',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '206',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            }
          ]
        },
        {
          block: 'R.C',
          rooms: [
            {
              id: 1,
              number: '101',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '102',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '103',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '104',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '105',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '106',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 1,
              number: '201',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '202',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '203',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '204',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '205',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '206',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            }
          ]
        },
        {
          block: 'R.E',
          rooms: [
            {
              id: 1,
              number: '101',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '102',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '103',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '104',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '105',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '106',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 1,
              number: '201',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '202',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '203',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '204',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '205',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '206',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            }
          ]
        },
      ]
    },
    {
      id: 1,
      day: 'Terça',
      rooms: [
        {
          block: 'R.A',
          rooms: [
            {
              id: 1,
              number: '101',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '102',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '103',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '104',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '105',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '106',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 1,
              number: '201',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '202',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '203',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '204',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '205',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '206',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            }
          ]
        },
        {
          block: 'R.C',
          rooms: [
            {
              id: 1,
              number: '101',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '102',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '103',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '104',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '105',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '106',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 1,
              number: '201',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '202',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '203',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '204',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '205',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '206',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            }
          ]
        },
        {
          block: 'R.E',
          rooms: [
            {
              id: 1,
              number: '101',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '102',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '103',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '104',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '105',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '106',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 1,
              number: '201',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '202',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '203',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '204',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '205',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '206',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            }
          ]
        },
      ]
    },
    {
      id: 1,
      day: 'Quarta',
      rooms: [
        {
          block: 'R.A',
          rooms: [
            {
              id: 1,
              number: '101',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '102',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '103',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '104',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '105',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '106',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 1,
              number: '201',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '202',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '203',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '204',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '205',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '206',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            }
          ]
        },
        {
          block: 'R.C',
          rooms: [
            {
              id: 1,
              number: '101',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '102',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '103',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '104',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '105',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '106',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 1,
              number: '201',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '202',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '203',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '204',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '205',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '206',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            }
          ]
        },
        {
          block: 'R.E',
          rooms: [
            {
              id: 1,
              number: '101',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '102',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '103',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '104',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '105',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '106',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 1,
              number: '201',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '202',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '203',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '204',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '205',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '206',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            }
          ]
        },
      ]
    },
    {
      id: 1,
      day: 'Quinta',
      rooms: [
        {
          block: 'R.A',
          rooms: [
            {
              id: 1,
              number: '101',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '102',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '103',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '104',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '105',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '106',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 1,
              number: '201',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '202',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '203',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '204',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '205',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '206',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            }
          ]
        },
        {
          block: 'R.C',
          rooms: [
            {
              id: 1,
              number: '101',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '102',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '103',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '104',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '105',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '106',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 1,
              number: '201',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '202',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '203',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '204',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '205',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '206',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            }
          ]
        },
        {
          block: 'R.E',
          rooms: [
            {
              id: 1,
              number: '101',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '102',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '103',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '104',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '105',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '106',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 1,
              number: '201',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '202',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '203',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '204',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '205',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '206',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            }
          ]
        },
      ]
    },
    {
      id: 1,
      day: 'Sexta',
      rooms: [
        {
          block: 'R.A',
          rooms: [
            {
              id: 1,
              number: '101',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '102',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '103',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '104',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '105',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '106',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 1,
              number: '201',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '202',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '203',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '204',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '205',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '206',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            }
          ]
        },
        {
          block: 'R.C',
          rooms: [
            {
              id: 1,
              number: '101',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '102',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '103',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '104',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '105',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '106',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 1,
              number: '201',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '202',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '203',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '204',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '205',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '206',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            }
          ]
        },
        {
          block: 'R.E',
          rooms: [
            {
              id: 1,
              number: '101',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '102',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '103',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '104',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '105',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '106',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 1,
              number: '201',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 2,
              number: '202',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 3,
              number: '203',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 4,
              number: '204',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 5,
              number: '205',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            },
            {
              id: 6,
              number: '206',
              capacity: 40,
              students: [0, 35, 45, 10, 20, 40]
            }
          ]
        },
      ]
    },
  ];

  return (
    <S.Container>
      {data[indexDay].rooms.map((turma) => (
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

            <Typography id="text">{data[indexDay].day}</Typography>

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
