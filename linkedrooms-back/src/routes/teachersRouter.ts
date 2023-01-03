import { Router } from "express";

import * as controller from "./../controllers/teachersController.js";

const teachersRouter = Router();

teachersRouter.get("/", controller.getTeachers);
teachersRouter.get("/:id", controller.getTeacherById);
teachersRouter.post("/", controller.createTeacher);
teachersRouter.put("/:id", controller.updateTeacher);
teachersRouter.delete("/:id", controller.deleteTeacher);

export default teachersRouter;
