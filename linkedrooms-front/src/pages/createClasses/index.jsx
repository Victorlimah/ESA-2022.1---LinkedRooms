import * as S from './styles';

import Header from '../../components/header';

import { useState, useEffect } from 'react';
import { getCreateClass } from '../../services/api/classesService';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function CreateClasses() {

  const [data, setData] = useState({ teachers: [], disciplines: [], rooms: []});

  // o use effect não pode ser async, então eu crio uma função async e chamo ela dentro do use effect
  useEffect(() => {
    async function fetchData() {
      const response = await getCreateClass();
      setData(response);
    }
    fetchData();
  }, []);

  console.log(data);

  const teachers = data.teachers;
  const disciplines = data.disciplines
  const rooms = data.rooms;

  const [values, setValues] = useState({ teacher: '', discipline: '', room: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  return(
    <>
    <Header/>
    <S.Container>
      <S.Title>Criar turmas</S.Title>
      <S.Form onSubmit={(e) => CreateClasses(e)}>
          <InputLabel id="demo-simple-select-label">Teacher</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={values.teacher}
            label="Teacher"
            onChange={handleChange}
            name="teacher"
          >
           {teachers.map(({id, name}) => (
             <MenuItem key={id} value={id}>{name}</MenuItem>
            ))}
          </Select>
          <InputLabel id="demo-simple-select-label">Discipline</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={values.discipline}
            label="Discipline"
            onChange={handleChange}
            name="discipline"
          >
            {disciplines.map(({ id, name }) => (
              <MenuItem key={id} value={id}>{name}</MenuItem>
            ))}
          </Select>
          <InputLabel id="demo-simple-select-label">Room</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={values.room}
            label="Room"
            onChange={handleChange}
            name="room"
          >
            {rooms.map(({ id, number, name }) => (
              <MenuItem key={id} value={id}>{name} {number}</MenuItem>
            ))}
          </Select>
        <S.Input type="number" placeholder="Quantidade de alunos"/>
        <S.Input type="number" placeholder="Id do Horário"/>
        <S.Button>Criar</S.Button>
      </S.Form>
      </S.Container>
    </>
  )

  async function teste() {
    console.log('teste');
    const response = await getCreateClass();
    console.log(response);
    setData(response);
  }

  function CreateClasses(e) {
    e.preventDefault();
  }
}
