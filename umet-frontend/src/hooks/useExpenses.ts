import { useCallback, useEffect, useState } from 'react';
import { Expense, CreateExpensePayload, UpdateExpensePayload, ExpenseFilters } from '@/types/expense';
import {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
} from '@/services/expenseService';

export const useExpenses = (filters?: ExpenseFilters) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Stabilise filter primitives to avoid infinite re-fetch loops
  const categoryId = filters?.category_id;
  const paymentMethodId = filters?.payment_method_id;
  const search = filters?.search;
  const limit = filters?.limit;

  const fetchExpenses = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getExpenses(
        categoryId || paymentMethodId || search || limit
          ? { category_id: categoryId, payment_method_id: paymentMethodId, search, limit }
          : undefined,
      );
      setExpenses(data);
    } catch {
      setError('Failed to load expenses.');
    } finally {
      setIsLoading(false);
    }
  }, [categoryId, paymentMethodId, search, limit]); // primitives only

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  const addExpense = async (payload: CreateExpensePayload) => {
    const created = await createExpense(payload);
    setExpenses((prev) => [created, ...prev]);
    return created;
  };

  const editExpense = async (id: number, payload: UpdateExpensePayload) => {
    const updated = await updateExpense(id, payload);
    setExpenses((prev) => prev.map((e) => (e.id === id ? updated : e)));
    return updated;
  };

  const removeExpense = async (id: number) => {
    await deleteExpense(id);
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return { expenses, isLoading, error, fetchExpenses, addExpense, editExpense, removeExpense };
};
