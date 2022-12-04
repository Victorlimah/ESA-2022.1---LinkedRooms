import { Request, Response } from "express";
import sendEmail from "../services/emailService";

export async function signin(req: Request, res: Response) {
  const {email} = req.body;

  sendEmail(email)
}