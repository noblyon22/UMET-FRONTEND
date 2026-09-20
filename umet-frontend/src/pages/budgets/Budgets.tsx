import React, { useContext, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import BudgetCard from '@/components/budgets/BudgetCard';
import BudgetForm from '@/components/budgets/BudgetForm';
import Loader from '@/components/common/Loader';
import EmptyState from '@/components/common/EmptyState';
import { AppContext } from '@/context/AppContext';
import { getBudgets, createBudget } from '@/services/budgetService';
import { Budget } from '@/types/budget';
import { CreateBudgetPayload } from '@/types/budget';
import { useEffect } from 'react';

const Budgets: React.FC = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { categories } = useContext(AppContext);

  useEffect(() => {
    getBudgets()
      .then(setBudgets)
      .finally(() => setIsLoading(false));
  }, []);

  const handleCreate = async (payload: CreateBudgetPayload) => {
    setIsSaving(true);
    try {
      const created = await createBudget(payload);
      setBudgets((prev) => [created, ...prev]);
      setIsModalOpen(false);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <PageLayout>
      <Header
        title="Budgets"
        actions={<Button onClick={() => setIsModalOpen(true)}>Add Budget</Button>}
      />

      {isLoading ? (
        <Loader />
      ) : budgets.length === 0 ? (
        <EmptyState title="No budgets yet" description="Set a monthly budget to track spending." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {budgets.map((b) => (
            <BudgetCard key={b.id} budget={b} />
          ))}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Budget">
        <BudgetForm
          categories={categories}
          onSubmit={handleCreate}
          onCancel={() => setIsModalOpen(false)}
          isLoading={isSaving}
        />
      </Modal>
    </PageLayout>
  );
};

export default Budgets;
