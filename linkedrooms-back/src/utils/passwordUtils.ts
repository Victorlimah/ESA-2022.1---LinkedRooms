import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";
import dotenv from "dotenv";
dotenv.config();

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

export function generateOTP() {
  return otpGenerator.generate(6, {lowerCaseAlphabets: false, specialChars: false});
}
