import * as repository from "../repositories/authRepository.js";
import { processUserName, sendEmail } from "../utils/emailUtils.js";
import { User } from "../models/dataDto.js";
import dotenv from "dotenv";
import { conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils.js";
import { encrypt, generateToken, decrypt, generateOTP } from "../utils/passwordUtils.js";

dotenv.config();

export async function createUser({ email, password }) {
  const userExists = await repository.search("email", email);
  if (userExists) throw conflictError("User already exists");

  const name = processUserName(email);
  const encryptedPassword = encrypt(password);

  const newUser: User = {
    email,
    name,
    password: encryptedPassword,
    role: process.env.ROLE,
    code: generateOTP()
  };

  repository.create(newUser);
  sendEmail(newUser);
}

export async function signin({ email, password }) {
  const userExists = await repository.search("email", email);
  if (!userExists) throw unauthorizedError("email or password incorrect");

  const isCorrectPassword = decrypt(password, userExists.password);
  if (!isCorrectPassword) throw unauthorizedError("email or password incorrect");

  const userData = {
    name: userExists.name,
    email: userExists.email,
    role: userExists.role
  };

  const token = generateToken(userData);
  return token;
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