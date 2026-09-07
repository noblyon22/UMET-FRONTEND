import api from './api';
import {
  DashboardSummary,
  MonthlyDashboard,
  CategoryBreakdownItem,
  BudgetDashboardItem,
  MonthlyParams,
} from '@/types/dashboard';

// GET /api/dashboard/summary
export const getDashboardSummary = async (): Promise<DashboardSummary> => {
  const { data } = await api.get<DashboardSummary>('/api/dashboard/summary');
  return data;
};

// GET /api/dashboard/monthly?year=&month=
export const getMonthlyDashboard = async (params: MonthlyParams): Promise<MonthlyDashboard> => {
  const { data } = await api.get<MonthlyDashboard>('/api/dashboard/monthly', { params });
  return data;
};

// GET /api/dashboard/categories
export const getDashboardCategories = async (): Promise<CategoryBreakdownItem[]> => {
  const { data } = await api.get<CategoryBreakdownItem[]>('/api/dashboard/categories');
  return data;
};

// GET /api/dashboard/budgets?year=&month=
export const getDashboardBudgets = async (
  params: MonthlyParams,
): Promise<BudgetDashboardItem[]> => {
  const { data } = await api.get<BudgetDashboardItem[]>('/api/dashboard/budgets', { params });
  return data;
};
