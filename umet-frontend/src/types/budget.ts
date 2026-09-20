import { Category } from './category';

export interface Budget {
  id: number;
  amount: number;
  month: number;
  year: number;
  category: Category;
  spent: number;
  remaining: number;
  created_at: string;
  updated_at: string;
}

export interface CreateBudgetPayload {
  amount: number;
  month: number;
  year: number;
  category_id: number;
}
