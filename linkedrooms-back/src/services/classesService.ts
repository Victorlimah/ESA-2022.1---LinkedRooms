import * as repository from '../repositories/classesRepository.js';

export type ClassSpot = {
    teacherId: number;
    disciplineId: number;
    roomId: number;
    students: number;
    schedules: number[]
}

export type ClassEdit = {
    id: number;
    teacher: string;
    discipline: string;
    block: string;
    number: string;
    students: number;
}

export async function getClasses() {
    const classes = await repository.getClasses();
    return classes;
}

export async function getNew() {
    const data = await repository.getNew();
    return data;
}

export async function getCreate() {
    const data = await repository.getCreate();
    return data;
}

export async function getClassesByRoomId(blockId: number, number: string) {
    const classes = await repository.getClassesByRoomId(blockId, number);
    return classes;
}

export async function createClass(data: ClassSpot) {
    const newClass = await repository.createClass(data);
    return newClass;
}

export async function updateClass(data: ClassEdit) {
    const updatedClass = await repository.updateClass(data);
    return updatedClass;
}