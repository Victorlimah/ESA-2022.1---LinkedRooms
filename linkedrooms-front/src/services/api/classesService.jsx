import api from './api';

export async function getCreateClass() {
  const response = await api.get('/classes/create');
  return response.data;
}
