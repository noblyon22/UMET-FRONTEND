import api from './api';
import { Budget, CreateBudgetPayload } from '@/types/budget';

// GET /api/budgets
export const getBudgets = async (): Promise<Budget[]> => {
  const { data } = await api.get<Budget[]>('/api/budgets');
  return data;
};

// POST /api/budgets
export const createBudget = async (payload: CreateBudgetPayload): Promise<Budget> => {
  const { data } = await api.post<Budget>('/api/budgets', payload);
  return data;
};
