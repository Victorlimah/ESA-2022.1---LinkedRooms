import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export function encrypt(password: string) {
  return bcrypt.hashSync(password, 10);
}

export function decrypt(password: string, encryptedPassword: string) {
  return bcrypt.compareSync(password, encryptedPassword);
}

export function generateToken(dataToEncrypt: object) {
  const keyJWT = process.env.JWT_SECRET;
  const token = jwt.sign(dataToEncrypt, keyJWT);
  return token;
}