export interface Category {
  id: number;
  name: string;
  color?: string;
  icon?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateCategoryPayload {
  name: string;
  color?: string;
  icon?: string;
}

export interface PaymentMethod {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
