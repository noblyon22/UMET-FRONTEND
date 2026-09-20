import api from './api';
import { Category, CreateCategoryPayload, PaymentMethod } from '@/types/category';

// GET /api/categories
export const getCategories = async (): Promise<Category[]> => {
  const { data } = await api.get<Category[]>('/api/categories');
  return data;
};

// POST /api/categories
export const createCategory = async (payload: CreateCategoryPayload): Promise<Category> => {
  const { data } = await api.post<Category>('/api/categories', payload);
  return data;
};

// GET /api/payment-methods
export const getPaymentMethods = async (): Promise<PaymentMethod[]> => {
  const { data } = await api.get<PaymentMethod[]>('/api/payment-methods');
  return data;
};
