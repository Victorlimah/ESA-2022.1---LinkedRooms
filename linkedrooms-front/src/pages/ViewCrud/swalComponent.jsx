import Swal from 'sweetalert2';

import { addEntity, updateEntity } from '../../services/api/adminService';

export async function createTeacher() {
  return Swal.fire({
    title: 'Adicionar Professor',
    html: `
      <input id="swal-input1" class="swal2-input" placeholder="Nome">
    `,
    focusConfirm: false,
    preConfirm: () => {
      const name = Swal.getPopup().querySelector('#swal-input1').value
      if (!name) {
        Swal.showValidationMessage(`Nome é obrigatório`)
      }
      return { name: name }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      addEntity('teachers', result.value).then((response) => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Professor adicionado com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }).catch((error) => {
        Swal.fire({
          title: 'Erro!',
          text: 'Erro ao adicionar professor!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
    }
  })

}

export async function createDiscipline() {
  return Swal.fire({
    title: 'Adicionar Disciplina',
    html: `
      <input id="swal-input1" class="swal2-input" placeholder="Nome">
      <input id="swal-input2" class="swal2-input" placeholder="Código">
      <input id="swal-input3" class="swal2-input" placeholder="Carga Horária">
    `,
    focusConfirm: false,
    preConfirm: () => {
      const name = Swal.getPopup().querySelector('#swal-input1').value
      const code = Swal.getPopup().querySelector('#swal-input2').value
      const workload = Swal.getPopup().querySelector('#swal-input3').value
      if (!name) {
        Swal.showValidationMessage(`Nome é obrigatório`)
      }
      if (!code) {
        Swal.showValidationMessage(`Código é obrigatório`)
      }
      if (!workload) {
        Swal.showValidationMessage(`Carga horária é obrigatório`)
      }
      return { name, code, workload: parseInt(workload) }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      addEntity('disciplines', result.value).then((response) => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Disciplina adicionada com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }).catch((error) => {
        Swal.fire({
          title: 'Erro!',
          text: 'Erro ao adicionar disciplina!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
    }
  }
  )
}

export async function createCourse() {
  return Swal.fire({
    title: 'Adicionar Curso',
    html: `
      <input id="swal-input1" class="swal2-input" placeholder="Nome">
    `,
    focusConfirm: false,
    preConfirm: () => {
      const name = Swal.getPopup().querySelector('#swal-input1').value
      if (!name) {
        Swal.showValidationMessage(`Nome é obrigatório`)
      }
      return { name }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      addEntity('courses', result.value).then((response) => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Curso adicionado com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }).catch((error) => {
        Swal.fire({
          title: 'Erro!',
          text: 'Erro ao adicionar curso!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
    }
  })
}

export async function createTag() {
  return Swal.fire({
    title: 'Adicionar Tag',
    html: `
      <input id="swal-input1" class="swal2-input" placeholder="Nome">
    `,
    focusConfirm: false,
    preConfirm: () => {
      const name = Swal.getPopup().querySelector('#swal-input1').value
      if (!name) {
        Swal.showValidationMessage(`Nome é obrigatório`)
      }
      return { name }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      addEntity('tags', result.value).then((response) => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Tag adicionada com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }).catch((error) => {
        Swal.fire({
          title: 'Erro!',
          text: 'Erro ao adicionar tag!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
    }
  })
}

export async function editTag(id, name) {
  return Swal.fire({
    title: 'Editar Tag',
    html: `
      <input id="swal-input1" class="swal2-input" value="${name}">
    `,
    focusConfirm: false,
    preConfirm: () => {
      const name = Swal.getPopup().querySelector('#swal-input1').value
      if (!name) {
        Swal.showValidationMessage(`Nome é obrigatório`)
      }
      return { name }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      updateEntity('tags', id, result.value).then((response) => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Tag editada com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }).catch((error) => {
        Swal.fire({
          title: 'Erro!',
          text: 'Erro ao editar tag!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
    }
  })
}
