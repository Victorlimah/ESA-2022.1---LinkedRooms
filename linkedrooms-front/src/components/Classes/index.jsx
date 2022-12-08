import * as S from './styles';

import { useState, useEffect } from 'react';

import { createClass, getNewClass, getAllClasses, updateClass } from '../../services/api/classesService';
import Swal from 'sweetalert2';
import { FiSettings } from 'react-icons/fi';

import M from 'materialize-css';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { OutlinedInput } from '@mui/material';

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


export default function Classes() {
  const [creating, setCreating] = useState(false);
  const [data, setData] = useState({ teachers: [], rooms: [], disciplines:[], schedules: {ch30: [], ch45: [], ch60: []}});
  const [classes, setClasses] = useState([]);
  const [selecteds, setSelecteds] = useState([]);
  const [discipline, setDiscipline] = useState({
    id: 0,
    name:'',
    teacher: '',
    room: '',
    students: 0,
  });
  

  useEffect(() => {
    async function getClasses() {
      const response = await getNewClass();
      const classes = await getAllClasses();
      setData(response);
      setClasses(classes);
    }
    getClasses();
  }, []);

  const teachers = data.teachers.map((teacher) => { return teacher.name });
  const rooms = data.rooms.map((room) => { return room.name });
  const disciplines = data.disciplines.map((discipline) => { return discipline.name });


  return (
    <S.Container>
      <S.Title>Turmas</S.Title>
      <S.Content>
        {creating && (
        <S.Form onSubmit={addClass}>
          <S.FormTitle>Criar uma nova turma</S.FormTitle>
          <S.Button type="submit">Cadastrar</S.Button>
            <S.Button cancel={true} onClick={() => setCreating(false)}>Cancelar</S.Button>
          <S.FormContent>
            <S.FormItem>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={teachers}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField id="teacher" {...params} name="teacher" label="Professor" />
                )}
              />
            </S.FormItem>
            <S.FormItem>
              <Autocomplete
                disablePortal
                id="combo-box-demo discipline"
                options={disciplines}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} name="discipline" label="Disciplina" />
                )}
                defaultChecked={true}
              />
            </S.FormItem>
          </S.FormContent>
        <S.FormContent>
          <S.FormItem>
            <Autocomplete
              disablePortal
              id="combo-box-demo room"
              options={rooms}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} name="room" label="Sala" />
              )}
            />
          </S.FormItem>
          <S.FormItem>
            <OutlinedInput sx={{width: 300}} name="students" placeholder="Quantidade de alunos" type='number' style={{padding: 10}}/>
          </S.FormItem>
      </S.FormContent>
          <S.FormSubtitle>Horário</S.FormSubtitle>
          <S.DivSchedule>
            <S.HeaderSchedule>
              <S.HeaderScheduleItem>Horário</S.HeaderScheduleItem>
              <S.HeaderScheduleItem>Segunda</S.HeaderScheduleItem>
              <S.HeaderScheduleItem>Terça</S.HeaderScheduleItem>
              <S.HeaderScheduleItem>Quarta</S.HeaderScheduleItem>
              <S.HeaderScheduleItem>Quinta</S.HeaderScheduleItem>
              <S.HeaderScheduleItem>Sexta</S.HeaderScheduleItem>
            </S.HeaderSchedule>
            <S.Schedule>
              <S.ScheduleItem className="hour">08:00 - 10:00</S.ScheduleItem>
              {selecteds.includes(1) ? (
                <S.ScheduleItem onClick={() => selectSchedule(1)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(1)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(7) ? (
                <S.ScheduleItem onClick={() => selectSchedule(7)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(7)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(13) ? (
                <S.ScheduleItem onClick={() => selectSchedule(13)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(13)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(19) ? (
                <S.ScheduleItem onClick={() => selectSchedule(19)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(19)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(25) ? (
                <S.ScheduleItem onClick={() => selectSchedule(25)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(25)}>Selecionar</S.ScheduleItem>
              )}
            </S.Schedule>
            <S.Schedule>
              <S.ScheduleItem className="hour">10:00 - 12:00</S.ScheduleItem>
              {selecteds.includes(2) ? (
                <S.ScheduleItem onClick={() => selectSchedule(2)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                  <S.ScheduleItem onClick={() => selectSchedule(2)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(8) ? (
                <S.ScheduleItem onClick={() => selectSchedule(8)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(8)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(14) ? (
                <S.ScheduleItem onClick={() => selectSchedule(14)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(14)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(20) ? (
                <S.ScheduleItem onClick={() => selectSchedule(20)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(20)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(26) ? (
                <S.ScheduleItem onClick={() => selectSchedule(26)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(26)}>Selecionar</S.ScheduleItem>
              )}
            </S.Schedule>
            <S.Schedule>
              <S.ScheduleItem className="hour">13:00 - 15:00</S.ScheduleItem>
              {selecteds.includes(3) ? (
                <S.ScheduleItem onClick={() => selectSchedule(3)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(3)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(9) ? (
                <S.ScheduleItem onClick={() => selectSchedule(9)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(9)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(15) ? (
                <S.ScheduleItem onClick={() => selectSchedule(15)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(15)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(21) ? (
                <S.ScheduleItem onClick={() => selectSchedule(21)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(21)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(27) ? (
                <S.ScheduleItem onClick={() => selectSchedule(27)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(27)}>Selecionar</S.ScheduleItem>
              )}
            </S.Schedule>
            <S.Schedule>
              <S.ScheduleItem className="hour">15:00 - 17:00</S.ScheduleItem>
              {selecteds.includes(4) ? (
                <S.ScheduleItem onClick={() => selectSchedule(4)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(4)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(10) ? (
                <S.ScheduleItem onClick={() => selectSchedule(10)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(10)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(16) ? (
                <S.ScheduleItem onClick={() => selectSchedule(16)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(16)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(22) ? (
                <S.ScheduleItem onClick={() => selectSchedule(22)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(22)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(28) ? (
                <S.ScheduleItem onClick={() => selectSchedule(28)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(28)}>Selecionar</S.ScheduleItem>
              )}
            </S.Schedule>
            <S.Schedule>
              <S.ScheduleItem className="hour">19:00 - 20:40</S.ScheduleItem>
              {selecteds.includes(5) ? (
                <S.ScheduleItem onClick={() => selectSchedule(5)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(5)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(11) ? (
                <S.ScheduleItem onClick={() => selectSchedule(11)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(11)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(17) ? (
                <S.ScheduleItem onClick={() => selectSchedule(17)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(17)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(23) ? (
                <S.ScheduleItem onClick={() => selectSchedule(23)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(23)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(29) ? (
                <S.ScheduleItem onClick={() => selectSchedule(29)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(29)}>Selecionar</S.ScheduleItem>
              )}
            </S.Schedule>
            <S.Schedule>
              <S.ScheduleItem className="hour">20:40 - 22:40</S.ScheduleItem>
              {selecteds.includes(6) ? (
                <S.ScheduleItem onClick={() => selectSchedule(6)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(6)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(12) ? (
                <S.ScheduleItem onClick={() => selectSchedule(12)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(12)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(18) ? (
                <S.ScheduleItem onClick={() => selectSchedule(18)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(18)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(24) ? (
                <S.ScheduleItem onClick={() => selectSchedule(24)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(24)}>Selecionar</S.ScheduleItem>
              )}
              {selecteds.includes(30) ? (
                <S.ScheduleItem onClick={() => selectSchedule(30)} select="true">Selecionado</S.ScheduleItem>
              ) : (
                <S.ScheduleItem onClick={() => selectSchedule(30)}>Selecionar</S.ScheduleItem>
              )}
            </S.Schedule>
          </S.DivSchedule>
        </S.Form>
        )}
        <S.Cards>
          <S.Card onClick={() => setCreating(true)}>
          <S.CardHeader>
            <S.CardTitle>Add Turma</S.CardTitle>
          </S.CardHeader>
        </S.Card>
        {classes?.map((item) => (
          <S.Card key={item?.id}>
            <S.CardHeader>
              <S.CardTitle>{item?.name}</S.CardTitle>
            </S.CardHeader>
            <S.CardBody>
              <S.CardText>{item?.teacher}</S.CardText>
              <S.CardText>{item?.day} {item?.schedule}</S.CardText>
              <S.CardText>{item?.block} - {item?.number}</S.CardText>
              <S.CardText>{item?.students} Alunos</S.CardText>
              <S.EditButton
                data-target="modal1"
                class="btn modal-trigger"
                onClick={() => openEditModal(item)}
              >
                <FiSettings color='#fff' />
              </S.EditButton>
            </S.CardBody>
          </S.Card>
        ))}
        </S.Cards>
      </S.Content>
      <div id="modal1" class="modal">
        <div class="modal-content">
          <S.TitleModal>{discipline.name}</S.TitleModal>
          <Box sx={{ minWidth: 120, color: 'red'}}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Professor
              </InputLabel>
              <NativeSelect
                onChange={(e) => setDiscipline({ ...discipline, teacher: e.target.value })}
                defaultValue={discipline.teacher}
                inputProps={{
                  name: 'teacher',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={discipline.teacher}>{discipline.teacher}</option>
                {teachers.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </NativeSelect>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 120, color: 'red' }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Sala
              </InputLabel>
              <NativeSelect
                onChange={(e) => setDiscipline({ ...discipline, room: e.target.value })}
                defaultValue={discipline.room}
                inputProps={{
                  name: 'room',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={discipline.number}>{`
                  ${discipline.block} - ${discipline.number}
                `}</option>
                {rooms.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </NativeSelect>
            </FormControl>
          </Box>

          <Input onChange={(e) => setDiscipline({ ...discipline, students: e.target.value })} type="number" placeholder={`${discipline.students} alunos`} />


        </div>

        <div class="modal-footer">
          <S.ActionButton
            onClick={() => cancelEdit()}
            type="cancel"
            class="modal-close waves-effect waves-green btn-flat"
          >
            Cancelar
          </S.ActionButton>
          <S.ActionButton
            onClick={() => saveEdit(discipline)}
            type="add"
            class="modal-close waves-effect waves-green btn-flat"
          >
            Salvar
          </S.ActionButton>
        </div>
      </div>
    </S.Container>
  );

  function addClass(e){
    e.preventDefault();
    try{
      const nameTeacher = document.querySelector('input[name="teacher"]').value;
      const nameDiscipline = document.querySelector('input[name="discipline"]').value;
      const nameRoom = document.querySelector('input[name="room"]').value;

      const teacherId = data.teachers.find((teacher) => teacher.name === nameTeacher).id;
      const disciplineId = data.disciplines.find((discipline) => discipline.name === nameDiscipline).id;
      const roomId = data.rooms.find((room) => room.name === nameRoom).id;

      const students = Number(document.querySelector('input[name="students"]').value);

      createClass(teacherId, disciplineId, roomId, students, selecteds);
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos!',
      });
    }
    
    
  }

  function selectSchedule(id) {
    const alreadySelected = selecteds.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selecteds.filter((item) => item !== id);
      setSelecteds(filteredItems);
    } else {
      if (selecteds.length >= 2) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Você só pode selecionar 2 horários!',
        });
        return;
      }
      setSelecteds([...selecteds, id]);
    }
  }

  function openEditModal(item) {
    setDiscipline(item);
    console.log(item);
    const modal = document.querySelector('#modal1');
    const instance = M.Modal.init(modal);
    instance.open();
  }


  function cancelEdit() {
    const modal = document.querySelector('#modal1');
    const instance = M.Modal.init(modal);
    instance.close();
  }
  
  async function saveEdit(data) {
    const modal = document.querySelector('#modal1');
    const instance = M.Modal.init(modal);
    instance.close();
    const { id, teacher, name, number, block, students } = data;
    
    console.log(id, teacher, name, number, block, students);
    await updateClass(id, teacher, discipline, block, number, students);
  }

};
