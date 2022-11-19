import { Request, Response } from 'express';

import * as service from "./../services/roomsService.js";

export async function getRooms(req: Request, res: Response) {
  const rooms = await service.getRooms();
  res.send(rooms);
}