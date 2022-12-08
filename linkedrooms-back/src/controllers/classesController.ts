import * as service from '../services/classesService.js';
import { Response, Request } from 'express';

export async function getClasses(req: Request, res: Response) {
    const classes = await service.getClasses();
    res.send(classes);
}

export async function getNew(req: Request, res: Response) {
    const data = await service.getNew();
    res.send(data);
}

export async function getCreate(req: Request, res: Response) {
    const data = await service.getCreate();
    res.send(data);
}

export async function getClassesByRoomId(req: Request, res: Response) {
    const blockId = Number(req.params.blockId);
    const number = req.params.number;

    const classes = await service.getClassesByRoomId(blockId, number);
    res.send(classes);
}

export async function createClass(req: Request, res: Response) {
    const data = req.body;
    const newClass = await service.createClass(data);
    res.send(newClass);
}

export async function updateClass(req: Request, res: Response) {
    const data = req.body;
    const updatedClass = await service.updateClass(data);
    res.send(updatedClass);
}