import api from './api';
import { AuthResponse, LoginPayload, MeResponse, RegisterPayload } from '@/types/auth';

// POST /api/auth/register
export const register = async (payload: RegisterPayload): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>('/api/auth/register', payload);
  return data;
};

// POST /api/auth/login
export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>('/api/auth/login', payload);
  return data;
};

// POST /api/auth/logout
export const logout = async (): Promise<void> => {
  await api.post('/api/auth/logout');
};

// GET /api/auth/me
export const getMe = async (): Promise<MeResponse> => {
  const { data } = await api.get<MeResponse>('/api/auth/me');
  return data;
};
