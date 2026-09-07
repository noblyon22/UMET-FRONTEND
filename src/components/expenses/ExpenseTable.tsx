import React from 'react';
import { Expense } from '@/types/expense';
import { formatCurrency } from '@/utils/formatCurrency';
import { formatDate } from '@/utils/formatDate';
import EmptyState from '@/components/common/EmptyState';

interface ExpenseTableProps {
  expenses: Expense[];
  onEdit?: (expense: Expense) => void;
  onDelete?: (id: number) => void;
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses, onEdit, onDelete }) => {
  if (expenses.length === 0) {
    return <EmptyState title="No expenses found" description="Add your first expense to get started." />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Payment Method</th>
            <th>Date</th>
            <th className="text-right">Amount</th>
            {(onEdit || onDelete) && <th />}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td><span className="badge badge-blue">{expense.category.name}</span></td>
              <td><span className="badge badge-yellow">{expense.payment_method.name}</span></td>
              <td className="text-gray-500">{formatDate(expense.date)}</td>
              <td className="text-right font-medium text-red-600">
                -{formatCurrency(expense.amount)}
              </td>
              {(onEdit || onDelete) && (
                <td className="text-right">
                  <div className="flex justify-end gap-3">
                    {onEdit && (
                      <button
                        onClick={() => onEdit(expense)}
                        className="text-xs text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => onDelete(expense.id)}
                        className="text-xs text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
