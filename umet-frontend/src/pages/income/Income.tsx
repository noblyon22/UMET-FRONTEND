import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import IncomeTable from '@/components/income/IncomeTable';
import IncomeForm from '@/components/income/IncomeForm';
import Loader from '@/components/common/Loader';
import { useIncome } from '@/hooks/useIncome';
import { CreateIncomePayload } from '@/types/income';

const Income: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { incomeList, isLoading, addIncome, removeIncome } = useIncome();

  const handleCreate = async (payload: CreateIncomePayload) => {
    setIsSaving(true);
    try {
      await addIncome(payload);
      setIsModalOpen(false);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <PageLayout>
      <Header
        title="Income"
        actions={<Button onClick={() => setIsModalOpen(true)}>Add Income</Button>}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <IncomeTable incomeList={incomeList} onDelete={removeIncome} />
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Income">
        <IncomeForm
          onSubmit={handleCreate}
          onCancel={() => setIsModalOpen(false)}
          isLoading={isSaving}
        />
      </Modal>
    </PageLayout>
  );
};

export default Income;
