import { Router } from "express";
import * as controller from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/", controller.signup);

export default authRouter;