import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import { formatCurrency } from '@/utils/formatCurrency';
import { formatDate } from '@/utils/formatDate';
import { useExpenses } from '@/hooks/useExpenses';

const ExpenseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { expenses, isLoading, removeExpense } = useExpenses();
  const expense = expenses.find((e) => e.id === Number(id));

  if (isLoading) return <Loader fullPage />;

  if (!expense) {
    return (
      <PageLayout>
        <p className="text-gray-500">Expense not found.</p>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Header
        title="Expense Details"
        actions={
          <Button
            variant="danger"
            onClick={async () => {
              await removeExpense(expense.id);
              navigate('/expenses');
            }}
          >
            Delete
          </Button>
        }
      />
      <div className="card max-w-md">
        <dl className="flex flex-col gap-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-gray-500">Description</dt>
            <dd className="font-medium">{expense.description}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Amount</dt>
            <dd className="font-bold text-red-600">-{formatCurrency(expense.amount)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Date</dt>
            <dd>{formatDate(expense.date)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Category</dt>
            <dd><span className="badge badge-blue">{expense.category.name}</span></dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Payment Method</dt>
            <dd><span className="badge badge-yellow">{expense.payment_method.name}</span></dd>
          </div>
        </dl>
      </div>
    </PageLayout>
  );
};

export default ExpenseDetails;
