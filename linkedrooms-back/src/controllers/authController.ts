import { Request, Response } from "express";
import * as service from "../services/authService.js";

export async function signup(req: Request, res: Response) {
  const { email } = req.body;
  await service.createUser(email);
  res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
  const { email } = req.body;
  const user = await service.signin(email);
  res.send(user).status(200);
}

export async function access(req: Request, res: Response) {
  const { code } = req.body;
  await service.checkAccessCode(code);
  res.sendStatus(200);
}