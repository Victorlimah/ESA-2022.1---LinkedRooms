import * as repository from '../repositories/classesRepository.js';

export async function getClasses() {
    const classes = await repository.getClasses();
    return classes;
}

export async function getCreate() {
    const data = await repository.getCreate();
    return data;
}

export async function getClassesByRoomId(blockId: number, number: string) {
    const classes = await repository.getClassesByRoomId(blockId, number);
    return classes;
}
