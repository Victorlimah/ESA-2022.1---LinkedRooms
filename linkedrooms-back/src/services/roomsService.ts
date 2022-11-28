import * as repository from '../repositories/roomsRepository.js';

export async function getRooms() {
  const rooms = await repository.getRooms();
  return rooms;
}