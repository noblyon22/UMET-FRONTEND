import React from 'react';
import Modal from '@/components/common/Modal';
import ExpenseForm from './ExpenseForm';
import { CreateExpensePayload, Expense } from '@/types/expense';
import { Category, PaymentMethod } from '@/types/category';

interface ExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (payload: CreateExpensePayload) => Promise<void>;
  categories: Category[];
  paymentMethods: PaymentMethod[];
  editingExpense?: Expense | null;
  isLoading?: boolean;
}

const ExpenseModal: React.FC<ExpenseModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  categories,
  paymentMethods,
  isLoading = false,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title="Add Expense"
    size="md"
  >
    <ExpenseForm
      categories={categories}
      paymentMethods={paymentMethods}
      onSubmit={async (payload) => {
        await onSubmit(payload);
        onClose();
      }}
      onCancel={onClose}
      isLoading={isLoading}
    />
  </Modal>
);

export default ExpenseModal;
