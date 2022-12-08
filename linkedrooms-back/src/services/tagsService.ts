import * as repository from "../repositories/tagsRepository.js";

import { TagDto } from "../models/dataDto.js";

export async function getTags() {
  return await repository.getTags();
}

export async function getTag(id: number) {
  return await repository.getTag(id);
}

export async function createTag(tag: TagDto) {
  return await repository.createTag(tag);
}

export async function updateTag(id: number, tag: TagDto) {
  return await repository.updateTag(id, tag);
}

export async function deleteTag(id: number) {
  return await repository.deleteTag(id);
}