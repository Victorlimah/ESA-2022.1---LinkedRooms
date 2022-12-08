import { Router } from "express";

import * as controller from "./../controllers/disciplinesController.js";

const disciplinesRouter = Router();

disciplinesRouter.get("/", controller.getDisciplines);
disciplinesRouter.get("/:id", controller.getDiscipline);
disciplinesRouter.post("/", controller.createDiscipline);
disciplinesRouter.put("/:id", controller.updateDiscipline);
disciplinesRouter.delete("/:id", controller.deleteDiscipline);

export default disciplinesRouter;
