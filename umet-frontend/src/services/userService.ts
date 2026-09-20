import api from './api';
import { User, UpdateUserPayload, ChangePasswordPayload } from '@/types/user';

// GET /api/users/me
export const getUser = async (): Promise<User> => {
  const { data } = await api.get<User>('/api/users/me');
  return data;
};

// PATCH /api/users/me
export const updateMe = async (payload: UpdateUserPayload): Promise<User> => {
  const { data } = await api.patch<User>('/api/users/me', payload);
  return data;
};

// POST /api/users/me/change-password
export const changePassword = async (payload: ChangePasswordPayload): Promise<void> => {
  await api.post('/api/users/me/change-password', payload);
};
