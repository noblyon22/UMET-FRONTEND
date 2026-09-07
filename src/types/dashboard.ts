export interface DashboardSummary {
  total_income: number;
  total_expenses: number;
  net_balance: number;
  total_budgets: number;
}

export interface MonthlyDataPoint {
  month: string;
  income: number;
  expenses: number;
}

export interface MonthlyDashboard {
  year: number;
  month: number;
  total_income: number;
  total_expenses: number;
  net_balance: number;
  data: MonthlyDataPoint[];
}

export interface CategoryBreakdownItem {
  category_id: number;
  category_name: string;
  color?: string;
  total: number;
  percentage: number;
}

export interface BudgetDashboardItem {
  budget_id: number;
  category_id: number;
  category_name: string;
  budgeted: number;
  spent: number;
  remaining: number;
  percentage_used: number;
}

export interface MonthlyParams {
  year: number;
  month: number;
}
