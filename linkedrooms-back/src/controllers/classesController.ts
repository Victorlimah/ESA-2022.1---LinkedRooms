import * as service from '../services/classesService.js';
import { Response, Request } from 'express';

export async function getClasses(req: Request, res: Response) {
    const classes = await service.getClasses();
    res.send(classes);
}

export async function getCreate(req: Request, res: Response) {
    const data = await service.getCreate();
    console.log(data);
    res.send(data);
}

