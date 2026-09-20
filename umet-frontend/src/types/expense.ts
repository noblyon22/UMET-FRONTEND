import { Category, PaymentMethod } from './category';

export interface Expense {
  id: number;
  amount: number;
  description: string;
  date: string;
  category: Category;
  payment_method: PaymentMethod;
  created_at: string;
  updated_at: string;
}

export interface ExpenseFilters {
  category_id?: number;
  payment_method_id?: number;
  search?: string;
  limit?: number;
}

export interface CreateExpensePayload {
  amount: number;
  description: string;
  date: string;
  category_id: number;
  payment_method_id: number;
}

export type UpdateExpensePayload = Partial<CreateExpensePayload>;
