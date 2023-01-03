import { Request, Response } from "express";

import * as service from "./../services/coursesService.js";

export const getCourses = async (req: Request, res: Response) => {
  const courses = await service.getCourses();
  res.send(courses);
}

export const getCourse = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const course = await service.getCourse(id);
  res.send(course);
}

export const createCourse = async (req: Request, res: Response) => {
  const course = await service.createCourse(req.body);
  res.status(201).send(course);
}

export const updateCourse = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const course = await service.updateCourse(id, req.body);
  res.send(course);
}

export const deleteCourse = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const course = await service.deleteCourse(id);
  res.sendStatus(204);
}
