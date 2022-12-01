import * as repository from '../repositories/roomsRepository.js';
import * as classesRepository from "../repositories/classesRepository.js";

export async function getRooms() {
  const rooms = await repository.getRooms();
  return rooms;
}
