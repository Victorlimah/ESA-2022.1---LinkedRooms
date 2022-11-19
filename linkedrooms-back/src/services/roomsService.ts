import * as repository from '../repositories/roomsRepository.js';

export async function getRooms() {
  const rooms = await repository.getRooms();
  const teste = await repository.getStudentsOfSchedulesRoom("TERÇA", "R.A", "202");
  return teste;
}