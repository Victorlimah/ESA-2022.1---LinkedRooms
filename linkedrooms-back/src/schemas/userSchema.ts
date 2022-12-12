import Joi from "joi";
import { NewUser } from "../models/dataDto";

export const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const newUserSchema = Joi.object<NewUser>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  passwordConfirmation: Joi.ref('password')
})