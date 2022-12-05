import * as repository from "../repositories/authRepository";
import sendEmail from "../utils/emailUtils";
import { v4 as uuid} from "uuid";
import { User } from "../models/dataDto";

export async function createUser(email: string) {
  const userExists = await repository.search("email", email);
  if (userExists)  {
    throw { type: "conflict", message: "User already exists" };
  }
  
  const newUser: User = {
    email: email,
    name: "",
    role: 1,
    code: uuid()
  };
  repository.create(newUser);
  sendEmail(newUser);
}

