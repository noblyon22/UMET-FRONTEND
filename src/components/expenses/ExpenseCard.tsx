import React from 'react';
import { Expense } from '@/types/expense';
import { formatCurrency } from '@/utils/formatCurrency';
import { formatDate } from '@/utils/formatDate';

interface ExpenseCardProps {
  expense: Expense;
  onEdit?: (expense: Expense) => void;
  onDelete?: (id: number) => void;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ expense, onEdit, onDelete }) => (
  <div className="card flex items-start justify-between gap-4">
    <div className="flex-1 min-w-0">
      <p className="font-medium text-gray-900 truncate">{expense.description}</p>
      <p className="text-xs text-gray-500 mt-0.5">{formatDate(expense.date)}</p>
      <div className="mt-2 flex gap-2">
        <span className="badge badge-blue">{expense.category.name}</span>
        <span className="badge badge-yellow">{expense.payment_method.name}</span>
      </div>
    </div>
    <div className="flex flex-col items-end gap-2">
      <span className="text-lg font-bold text-red-600">-{formatCurrency(expense.amount)}</span>
      <div className="flex gap-2">
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
    </div>
  </div>
);

export default ExpenseCard;
