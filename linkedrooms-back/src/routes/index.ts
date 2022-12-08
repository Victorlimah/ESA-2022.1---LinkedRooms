import { Router } from 'express';

import tagsRouter from './tagsRouter.js';
import roomsRouter from './roomsRouter.js';
import coursesRouter from './coursesRouter.js';
import classesRouter from './classesRouter.js';
import teachersRouter from './teachersRouter.js';
import disciplinesRouter from './disciplinesRouter.js';

const routes = Router();

routes.use("/tags", tagsRouter);
routes.use("/rooms", roomsRouter);
routes.use("/courses", coursesRouter);
routes.use("/classes", classesRouter);
routes.use("/teachers", teachersRouter);
routes.use("/disciplines", disciplinesRouter);

export default routes;
