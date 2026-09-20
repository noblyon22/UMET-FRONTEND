import api from './api';
import { Income, CreateIncomePayload, UpdateIncomePayload } from '@/types/income';

// GET /api/income
export const getIncomeList = async (): Promise<Income[]> => {
  const { data } = await api.get<Income[]>('/api/income');
  return data;
};

// POST /api/income
export const createIncome = async (payload: CreateIncomePayload): Promise<Income> => {
  const { data } = await api.post<Income>('/api/income', payload);
  return data;
};

// GET /api/income/{income_id}
export const getIncome = async (incomeId: number): Promise<Income> => {
  const { data } = await api.get<Income>(`/api/income/${incomeId}`);
  return data;
};

// PUT /api/income/{income_id}
export const updateIncome = async (
  incomeId: number,
  payload: UpdateIncomePayload,
): Promise<Income> => {
  const { data } = await api.put<Income>(`/api/income/${incomeId}`, payload);
  return data;
};

// DELETE /api/income/{income_id}
export const deleteIncome = async (incomeId: number): Promise<void> => {
  await api.delete(`/api/income/${incomeId}`);
};
