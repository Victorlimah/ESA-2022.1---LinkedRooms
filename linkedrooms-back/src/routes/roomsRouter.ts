import { Router } from 'express';

import * as controller from './../controllers/roomsController.js';

const roomsRouter = Router();

roomsRouter.get('/', controller.getRooms);
roomsRouter.get("/blocks", controller.getRoomsBlocks);
roomsRouter.get('/:id', controller.getRoomById);
roomsRouter.post('/', controller.createRoom);
roomsRouter.post('/tags', controller.addTag);
roomsRouter.put('/:id', controller.updateRoom);
roomsRouter.delete('/:id', controller.deleteRoom);

export default roomsRouter;
