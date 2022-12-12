import { Router } from "express";
import * as controller from "../controllers/authController.js";
import { newUserSchema, userSchema} from "../schemas/userSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const authRouter = Router();

authRouter.post("/signup", validateSchema(newUserSchema), controller.signup);
authRouter.post("/signin", validateSchema(userSchema), controller.signin);
authRouter.get("/authentication", controller.access);

export default authRouter;