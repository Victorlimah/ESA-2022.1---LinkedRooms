import { Router } from 'express';

import roomsRouter from './roomsRouter.js';

const routes = Router();

routes.use("/rooms", roomsRouter);

export default routes;
