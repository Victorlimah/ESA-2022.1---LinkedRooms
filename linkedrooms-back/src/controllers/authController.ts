import { Request, Response } from "express";
import { createUser } from "../services/authService";

export async function signup(req: Request, res: Response) {
  const {email} = req.body;

  createUser(email);
}