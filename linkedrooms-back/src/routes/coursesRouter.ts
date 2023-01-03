import { Router } from "express";

import * as controller from "./../controllers/coursesController.js";

const coursesRouter = Router();

coursesRouter.get("/", controller.getCourses);
coursesRouter.get("/:id", controller.getCourse);
coursesRouter.post("/", controller.createCourse);
coursesRouter.put("/:id", controller.updateCourse);
coursesRouter.delete("/:id", controller.deleteCourse);

export default coursesRouter;
