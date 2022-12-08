import * as repository from '../repositories/roomsRepository.js';

import { RoomDto } from '../models/dataDto.js';

type tagSpot = {
  blockId: number;
  number: string;
  tagsAdd: string[];
  tagsRemove: string[];
}

export async function getRooms() {
  const rooms = await repository.getRooms();
  return rooms;
}

export async function getRoomsBlocks() {
  const rooms = await repository.getRoomsBlocks();
  return rooms;
}

export async function getRoomById(id: number) {
  const room = await repository.getRoomById(id);
  return room;
}

export async function createRoom(room: RoomDto) {
  const newRoom = await repository.createRoom(room);
  return newRoom;
}

export async function addTag(tag: tagSpot) {
  await repository.addTag(tag);
}

export async function updateRoom(id: number, room: RoomDto) {
  const updatedRoom = await repository.updateRoom(id, room);
  return updatedRoom;
}

export async function deleteRoom(id: number) {
  await repository.deleteRoom(id);
}