import { useCallback, useEffect, useState } from 'react';
import {
  DashboardSummary,
  MonthlyDashboard,
  CategoryBreakdownItem,
  BudgetDashboardItem,
  MonthlyParams,
} from '@/types/dashboard';
import {
  getDashboardSummary,
  getMonthlyDashboard,
  getDashboardCategories,
  getDashboardBudgets,
} from '@/services/dashboardService';

export const useDashboard = (monthlyParams?: MonthlyParams) => {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [monthly, setMonthly] = useState<MonthlyDashboard | null>(null);
  const [categories, setCategories] = useState<CategoryBreakdownItem[]>([]);
  const [budgets, setBudgets] = useState<BudgetDashboardItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Stabilise primitives so the effect doesn't re-run on every render
  const year = monthlyParams?.year;
  const month = monthlyParams?.month;

  const fetchAll = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const requests: Promise<unknown>[] = [
        getDashboardSummary().then(setSummary),
        getDashboardCategories().then(setCategories),
      ];
      if (year !== undefined && month !== undefined) {
        requests.push(getMonthlyDashboard({ year, month }).then(setMonthly));
        requests.push(getDashboardBudgets({ year, month }).then(setBudgets));
      }
      await Promise.all(requests);
    } catch {
      setError('Failed to load dashboard data.');
    } finally {
      setIsLoading(false);
    }
  }, [year, month]); // primitives — stable references, no infinite loop

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return { summary, monthly, categories, budgets, isLoading, error, fetchAll };
};
