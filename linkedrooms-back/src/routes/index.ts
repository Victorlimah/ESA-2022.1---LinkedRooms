import { Router } from 'express';

import authRouter from './authRouter.js';

const routes = Router();

export default routes;

import roomsRouter from './roomsRouter.js';
import classesRouter from './classesRouter.js';

const routes = Router();

routes.use(authRouter);
routes.use("/rooms", roomsRouter);
routes.use("/classes", classesRouter);

export default routes;
