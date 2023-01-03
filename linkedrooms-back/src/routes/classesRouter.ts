import { Router } from "express";

import * as controller from "./../controllers/classesController.js";

const classesRouter = Router();

classesRouter.get("/", controller.getClasses);
classesRouter.get("/distinct", controller.getDistinctClasses);
classesRouter.get("/new", controller.getNew);
classesRouter.get("/create", controller.getCreate);
classesRouter.get("/:blockId/:number", controller.getClassesByRoomId);
classesRouter.post("/", controller.createClass);
classesRouter.put("/", controller.updateClass);

export default classesRouter;