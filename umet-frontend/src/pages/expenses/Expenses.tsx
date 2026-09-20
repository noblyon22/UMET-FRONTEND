import React, { useContext, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import ExpenseFiltersBar from '@/components/expenses/ExpenseFilters';
import ExpenseTable from '@/components/expenses/ExpenseTable';
import ExpenseModal from '@/components/expenses/ExpenseModal';
import Loader from '@/components/common/Loader';
import { useExpenses } from '@/hooks/useExpenses';
import { AppContext } from '@/context/AppContext';
import { ExpenseFilters, CreateExpensePayload } from '@/types/expense';

const Expenses: React.FC = () => {
  const [filters, setFilters] = useState<ExpenseFilters>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { categories, paymentMethods } = useContext(AppContext);
  const { expenses, isLoading, addExpense, removeExpense } = useExpenses(filters);

  const handleCreate = async (payload: CreateExpensePayload) => {
    setIsSaving(true);
    try {
      await addExpense(payload);
      setIsModalOpen(false);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <PageLayout>
      <Header
        title="Expenses"
        actions={
          <Button onClick={() => setIsModalOpen(true)}>Add Expense</Button>
        }
      />

      <ExpenseFiltersBar
        filters={filters}
        categories={categories}
        paymentMethods={paymentMethods}
        onChange={setFilters}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <ExpenseTable
          expenses={expenses}
          onDelete={removeExpense}
        />
      )}

      <ExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreate}
        categories={categories}
        paymentMethods={paymentMethods}
        isLoading={isSaving}
      />
    </PageLayout>
  );
};

export default Expenses;
