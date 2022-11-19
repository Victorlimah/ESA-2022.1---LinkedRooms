import { Router } from 'express';

import * as controller from './../controllers/roomsController.js';

const roomsRouter = Router();

roomsRouter.get('/', controller.getRooms);

export default roomsRouter;
