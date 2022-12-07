import api from './api';

export async function getCreateClass() {
  const response = await api.get('/classes/create');
  return response.data;
}

export async function getClassesByRoomId(blockId, number){
  const response = await api.get(`/classes/${blockId}/${number}`);
  return response.data;
}