import * as repository from '../repositories/classesRepository.js';

export async function getClasses() {
    const classes = await repository.getClasses();
    return classes;
}

export async function getCreate() {
    const data = await repository.getCreate();
    return data;
}
