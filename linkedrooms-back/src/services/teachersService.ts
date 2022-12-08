import * as repository from "../repositories/teachersRepository.js";

import { TeacherDto } from './../models/dataDto';

export async function getTeachers() {
  const teachers = await repository.getTeachers();
  return teachers;
}

export async function getTeacherById(id: number) {
  const teacher = await repository.getTeacherById(id);
  return teacher;
}

export async function createTeacher(teacher: TeacherDto) {
  const newTeacher = await repository.createTeacher(teacher);
  return newTeacher;
}

export async function updateTeacher(id: number, teacher: any) {
  const updatedTeacher = await repository.updateTeacher(id, teacher);
  return updatedTeacher;
}

export async function deleteTeacher(id: number) {
  await repository.deleteTeacher(id);
}