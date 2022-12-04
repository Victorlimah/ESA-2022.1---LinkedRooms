/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';

import * as S from './styles';
import Header from '../../components/Header';

import Swal from 'sweetalert2';
import { createTeacher, createDiscipline, createCourse, createTag } from './swalComponent';
import { editTag } from './swalComponent';
import { deleteEntity } from '../../services/api/adminService';

import { styled } from '@mui/material/styles';
import { HiPencil, HiTrash } from 'react-icons/hi';
import { getEntity } from '../../services/api/adminService';

import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export default function ViewCrud() {
  const entity =  window.location.href.split('/')[4];
  const dataExample = [{ id: 1, name: 'John'}, { id: 2, name: 'Mary' }];
  const [rows, setRows] = useState(dataExample);

  const entityHash = {
    'professores': 'teachers',
    'disciplinas': 'disciplines',
    'salas': 'rooms/blocks',
    'cursos': 'courses',
    'tags': 'tags'
  };

  useEffect(() => {
    getEntity(entityHash[entity]).then((response) => {
      setRows(response);
    });
  }, []);
  
  return (
    <S.Container>
      <Header/>
      <S.Header>
      <S.Title>{capitalize(entity)}</S.Title>
        <S.AddButton onClick={() => addEntity()} variant="contained">Adicionar</S.AddButton>
      </S.Header>
      <br></br>
      <Table sx={{ width: 900 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell className='header'>Editar</StyledTableCell>
              <StyledTableCell className='header'>Deletar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" className='id'>
                {index+1}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="left">
                {row.name}
              </StyledTableCell>
              <StyledTableCell onClick={() => editRow(row)} align="right">
                {<HiPencil />}
              </StyledTableCell>
              <StyledTableCell onClick={() => deleteRow(row.id)} align="right">
                {<HiTrash />}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </S.Container>
  );

  async function editRow(row) {
    if (entity === 'tags'){
      await editTag(row.id, row.name).then(async (response) => {
        await getEntity(entityHash[entity]).then((response) => {
          setRows(response);
        });
      });
    }
  }

  async function addEntity() {
    if (entity === 'professores') {
      await createTeacher().then(async (response) => {
        await getEntity(entityHash[entity]).then((response) => {
          setRows(response);
        });
      });
    }
    else if (entity === 'disciplinas') {
      await createDiscipline().then(async (response) => {
        await getEntity(entityHash[entity]).then((response) => {
          setRows(response);
        });
      });
    }
    // else if (entity === 'salas') {
    //   createRoom().then((response) => {
    //     getEntity(entityHash[entity]).then((response) => {
    //       setRows(response);
    //     });
    //   });
    // }

    else if (entity === 'cursos') {
      await createCourse().then(async (response) => {
        await getEntity(entityHash[entity]).then((response) => {
          setRows(response);
        });
      });
    }

    else if (entity === 'tags') {
      await createTag().then(async (response) => {
        await getEntity(entityHash[entity]).then((response) => {
          setRows(response);
        });
      });
    }
  }

  async function deleteRow(id){
    return Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteEntity(entityHash[entity], id).then((response) => {
          Swal.fire(
            'Deletado!',
            'Sua entidade foi deletada.',
            'success'
          )
          setRows(rows.filter((row) => row.id !== id));
        }).catch((error) => {
          Swal.fire(
            'Erro!',
            'Erro ao deletar entidade.',
            'error'
          )
        });
      }
    })
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
