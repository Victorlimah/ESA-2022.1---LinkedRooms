import { Request, Response } from "express";

import * as service from "./../services/teachersService.js";

export async function getTeachers(req: Request, res: Response) {
  const teachers = await service.getTeachers();
  res.send(teachers);
}

export async function getTeacherById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const teacher = await service.getTeacherById(id);
  res.send(teacher);
}

export async function createTeacher(req: Request, res: Response) {
  const teacher = req.body;
  const newTeacher = await service.createTeacher(teacher);
  res.send(newTeacher);
}

export async function updateTeacher(req: Request, res: Response) {
  const id = Number(req.params.id);
  const teacher = req.body;
  const updatedTeacher = await service.updateTeacher(id, teacher);
  res.send(updatedTeacher);
}

export async function deleteTeacher(req: Request, res: Response) {
  const id = Number(req.params.id);
  await service.deleteTeacher(id);
  res.send();
}