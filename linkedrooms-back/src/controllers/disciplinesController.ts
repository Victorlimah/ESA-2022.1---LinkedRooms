import { Request, Response } from "express";

import * as service from "./../services/disciplinesService.js";

export async function getDisciplines(req: Request, res: Response) {
  const disciplines = await service.getDisciplines();
  res.send(disciplines);
}

export async function getDiscipline(req: Request, res: Response) {
  const id = Number(req.params.id);
  const discipline = await service.getDiscipline(id);
  res.send(discipline);
}

export async function createDiscipline(req: Request, res: Response) {
  const discipline = req.body;
  const newDiscipline = await service.createDiscipline(discipline);
  res.send(newDiscipline);
}

export async function updateDiscipline(req: Request, res: Response) {
  const id = Number(req.params.id);
  const discipline = req.body;
  const updatedDiscipline = await service.updateDiscipline(id, discipline);
  res.send(updatedDiscipline);
}

export async function deleteDiscipline(req: Request, res: Response) {
  const id = Number(req.params.id);
  await service.deleteDiscipline(id);
  res.send();
}