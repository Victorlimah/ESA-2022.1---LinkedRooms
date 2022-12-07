import api from './api';

export async function GetRooms() {
  const response = await api.get('/rooms');
  return response.data;
}
