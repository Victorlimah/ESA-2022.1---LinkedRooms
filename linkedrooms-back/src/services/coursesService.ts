import * as repository from '../repositories/coursesRepository.js';

import { CourseDto } from '../models/dataDto';

export async function getCourses(){
    return await repository.getCourses();
}

export async function getCourse(id: number){
    return await repository.getCourse(id);
}

export async function createCourse(course: CourseDto){
    return await repository.createCourse(course);
}

export async function updateCourse(id: number, course: CourseDto){
    return await repository.updateCourse(id, course);
}

export async function deleteCourse(id: number){
    return await repository.deleteCourse(id);
}