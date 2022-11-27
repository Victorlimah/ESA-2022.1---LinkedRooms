import { Router } from "express";

import * as controller from "./../controllers/classesController.js";

const classesRouter = Router();

classesRouter.get("/", controller.getClasses);
classesRouter.get("/create", controller.getCreate);
// classesRouter.get("/:id", controller.getClassById);
// classesRouter.post("/", controller.createClass);

export default classesRouter;