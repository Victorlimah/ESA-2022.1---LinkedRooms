import * as repository from "../repositories/authRepository.js";
import * as util from "../utils/emailUtils.js";
import { v4 as uuid} from "uuid";
import { User } from "../models/dataDto.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function createUser(email: string) {
  try {
    const userExists = await repository.search("email", email);
    if (userExists) throw { type: "conflict", message: "User already exists" };
    const authorizationCode = uuid();
    const name = util.processUserName(email);

    const newUser: User = {
      email: email,
      name: name,
      role: process.env.ROLE,
      code: authorizationCode
    };
    repository.create(newUser);
    util.sendEmail(newUser);
  } catch(error) {
    console.log(error);
  }
}

export async function signin(email: string) {
  try {
    const userExists = await repository.search("email", email);
    if (!userExists) throw { type: "NotFound", message: "User does not exist" };
  
    const userData = {
      name: userExists.name,
      email: userExists.email,
      role: userExists.role
    };

    const token = jwt.sign(userData, process.env.JWT_SECRET);
  
    return token;
  } catch(error) {
    console.log(error);
  }
}
