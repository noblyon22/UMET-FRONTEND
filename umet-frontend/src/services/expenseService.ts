import api from './api';
import { Expense, CreateExpensePayload, UpdateExpensePayload, ExpenseFilters } from '@/types/expense';

// GET /api/expenses
export const getExpenses = async (filters?: ExpenseFilters): Promise<Expense[]> => {
  const { data } = await api.get<Expense[]>('/api/expenses', { params: filters });
  return data;
};

// POST /api/expenses
export const createExpense = async (payload: CreateExpensePayload): Promise<Expense> => {
  const { data } = await api.post<Expense>('/api/expenses', payload);
  return data;
};

// GET /api/expenses/{expense_id}
export const getExpense = async (expenseId: number): Promise<Expense> => {
  const { data } = await api.get<Expense>(`/api/expenses/${expenseId}`);
  return data;
};

// PUT /api/expenses/{expense_id}
export const updateExpense = async (
  expenseId: number,
  payload: UpdateExpensePayload,
): Promise<Expense> => {
  const { data } = await api.put<Expense>(`/api/expenses/${expenseId}`, payload);
  return data;
};

// DELETE /api/expenses/{expense_id}
export const deleteExpense = async (expenseId: number): Promise<void> => {
  await api.delete(`/api/expenses/${expenseId}`);
};
