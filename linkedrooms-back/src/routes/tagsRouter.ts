import { Router } from "express";

import * as controller from "./../controllers/tagsController.js";

const tagsRouter = Router();

tagsRouter.get("/", controller.getTags);
tagsRouter.get("/:id", controller.getTag);
tagsRouter.post("/", controller.createTag);
tagsRouter.put("/:id", controller.updateTag);
tagsRouter.delete("/:id", controller.deleteTag);

export default tagsRouter;
