import { Request, Response } from "express";
import * as service from "../services/authService.js";

export async function signup(req: Request, res: Response) {
  await service.createUser(req.body);
  res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
  const user = await service.signin(req.body);
  res.send(user).status(200);
}

export async function access(req: Request, res: Response) {
  const { code } = req.body;
  await service.checkAccessCode(code);
  res.sendStatus(200);
}