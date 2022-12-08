import { Request, Response } from "express";

import * as service from "./../services/tagsService.js";

export async function getTags(req: Request, res: Response) {
  const tags = await service.getTags();
  res.send(tags);
}

export async function getTag(req: Request, res: Response) {
  const id = Number(req.params.id);
  const tag = await service.getTag(id);
  res.send(tag);
}

export async function createTag(req: Request, res: Response) {
  const tag = await service.createTag(req.body);
  res.status(201).send(tag);
}

export async function updateTag(req: Request, res: Response) {
  const id = Number(req.params.id);
  const tag = await service.updateTag(id, req.body);
  res.send(tag);
}

export async function deleteTag(req: Request, res: Response) {
  const id = Number(req.params.id);
  const tag = await service.deleteTag(id);
  res.status(204).send(tag);
}
