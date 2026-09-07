export interface Income {
  id: number;
  amount: number;
  source: string;
  description?: string;
  date: string;
  created_at: string;
  updated_at: string;
}

export interface CreateIncomePayload {
  amount: number;
  source: string;
  description?: string;
  date: string;
}

export type UpdateIncomePayload = Partial<CreateIncomePayload>;
