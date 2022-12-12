import * as repository from "../repositories/authRepository.js";
import { processUserName, sendEmail } from "../utils/emailUtils.js";
import { v4 as uuid} from "uuid";
import { User } from "../models/dataDto.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { conflictError } from "../utils/errorUtils.js";
import { encrypt } from "../utils/passwordUtils.js";

dotenv.config();

export async function createUser({ email, password }) {
    const userExists = await repository.search("email", email);
    if (userExists) throw conflictError("User already exists");

    const authorizationCode = uuid();
    const name = processUserName(email);
    const encryptedPassword = encrypt(password);

    const newUser: User = {
      email,
      name,
      password: encryptedPassword,
      role: process.env.ROLE,
      code: authorizationCode
    };

    repository.create(newUser);
    sendEmail(newUser);
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

export async function checkAccessCode(code: string) {
  try {
    const codeExists = await repository.search("code", code);
    if(!codeExists) throw {type: "NotFound", message: "None account has this code."}
    return codeExists;
  } catch(error) {
    console.log(error);
  }
}