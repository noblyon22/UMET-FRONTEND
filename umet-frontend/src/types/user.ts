export interface User {
  id: number;
  full_name: string;
  email: string;
  currency: string;
  is_active: boolean;
  created_at: string;
}

export interface UpdateUserPayload {
  full_name?: string;
  currency?: string;
}

export interface ChangePasswordPayload {
  current_password: string;
  new_password: string;
}
