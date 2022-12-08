import * as repository from '../repositories/disciplinesRepository.js';

import { DisciplineDto } from '../models/dataDto.js';

export async function getDisciplines() {
  return repository.getDisciplines();
}

export async function getDiscipline(id: number) {
  return repository.getDiscipline(id);
}

export async function createDiscipline(discipline: DisciplineDto) {
  return repository.createDiscipline(discipline);
}

export async function updateDiscipline(id: number, discipline: DisciplineDto) {
  return repository.updateDiscipline(id, discipline);
}

export async function deleteDiscipline(id: number) {
  return repository.deleteDiscipline(id);
}