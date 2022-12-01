import { Router } from 'express';

import roomsRouter from './roomsRouter.js';
import classesRouter from './classesRouter.js';

const routes = Router();

routes.use("/rooms", roomsRouter);
routes.use("/classes", classesRouter);

export default routes;
