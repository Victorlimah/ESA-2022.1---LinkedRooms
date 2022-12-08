import { Request, Response } from 'express';

import * as service from "./../services/roomsService.js";

export async function getRooms(req: Request, res: Response) {
  const rooms = await service.getRooms();
  res.send(rooms);
}

export async function getRoomsBlocks(req: Request, res: Response) {
  const rooms = await service.getRoomsBlocks();
  res.send(rooms);
}

export async function getRoomById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const room = await service.getRoomById(id);
  res.send(room);
}

export async function createRoom(req: Request, res: Response) {
  const room = req.body;
  const newRoom = await service.createRoom(room);
  res.status(201).send(newRoom);
}

export async function addTag(req: Request, res: Response) {
  const tag = req.body;
  console.log(tag);
  await service.addTag(tag);
  res.sendStatus(201)
}

export async function updateRoom(req: Request, res: Response) {
  const id = Number(req.params.id);
  const room = req.body;
  const updatedRoom = await service.updateRoom(id, room);
  res.send(updatedRoom);
}

export async function deleteRoom(req: Request, res: Response) {
  const id = Number(req.params.id);
  await service.deleteRoom(id);
  res.sendStatus(204);
}