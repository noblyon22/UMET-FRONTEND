import { useCallback, useEffect, useState } from 'react';
import { Income, CreateIncomePayload, UpdateIncomePayload } from '@/types/income';
import {
  getIncomeList,
  createIncome,
  updateIncome,
  deleteIncome,
} from '@/services/incomeService';

export const useIncome = () => {
  const [incomeList, setIncomeList] = useState<Income[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchIncome = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getIncomeList();
      setIncomeList(data);
    } catch {
      setError('Failed to load income.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchIncome();
  }, [fetchIncome]);

  const addIncome = async (payload: CreateIncomePayload) => {
    const created = await createIncome(payload);
    setIncomeList((prev) => [created, ...prev]);
    return created;
  };

  const editIncome = async (id: number, payload: UpdateIncomePayload) => {
    const updated = await updateIncome(id, payload);
    setIncomeList((prev) => prev.map((i) => (i.id === id ? updated : i)));
    return updated;
  };

  const removeIncome = async (id: number) => {
    await deleteIncome(id);
    setIncomeList((prev) => prev.filter((i) => i.id !== id));
  };

  return { incomeList, isLoading, error, fetchIncome, addIncome, editIncome, removeIncome };
};
