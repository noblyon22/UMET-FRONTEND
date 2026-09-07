import React from 'react';
import { Income } from '@/types/income';
import { formatCurrency } from '@/utils/formatCurrency';
import { formatDate } from '@/utils/formatDate';

interface IncomeCardProps {
  income: Income;
  onEdit?: (income: Income) => void;
  onDelete?: (id: number) => void;
}

const IncomeCard: React.FC<IncomeCardProps> = ({ income, onEdit, onDelete }) => (
  <div className="card flex items-start justify-between gap-4">
    <div className="flex-1 min-w-0">
      <p className="font-medium text-gray-900">{income.source}</p>
      {income.description && (
        <p className="text-xs text-gray-500 mt-0.5 truncate">{income.description}</p>
      )}
      <p className="text-xs text-gray-400 mt-1">{formatDate(income.date)}</p>
    </div>
    <div className="flex flex-col items-end gap-2">
      <span className="text-lg font-bold text-green-600">+{formatCurrency(income.amount)}</span>
      <div className="flex gap-2">
        {onEdit && (
          <button onClick={() => onEdit(income)} className="text-xs text-blue-600 hover:underline">
            Edit
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(income.id)}
            className="text-xs text-red-500 hover:underline"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  </div>
);

export default IncomeCard;
