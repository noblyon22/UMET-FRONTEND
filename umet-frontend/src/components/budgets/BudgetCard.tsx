import React from 'react';
import { Budget } from '@/types/budget';
import { formatCurrency } from '@/utils/formatCurrency';

interface BudgetCardProps {
  budget: Budget;
}

const BudgetCard: React.FC<BudgetCardProps> = ({ budget }) => {
  const pct = budget.amount > 0 ? Math.min((budget.spent / budget.amount) * 100, 100) : 0;
  const isOver = budget.spent > budget.amount;

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-gray-900">{budget.category.name}</span>
        <span className={`text-sm font-semibold ${isOver ? 'text-red-600' : 'text-gray-600'}`}>
          {formatCurrency(budget.spent)} / {formatCurrency(budget.amount)}
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar__fill"
          style={{
            width: `${pct}%`,
            backgroundColor: isOver ? '#dc2626' : '#2563eb',
          }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-xs text-gray-400">{pct.toFixed(0)}% used</span>
        <span className="text-xs text-gray-400">
          {isOver
            ? `Over by ${formatCurrency(budget.spent - budget.amount)}`
            : `${formatCurrency(budget.remaining)} remaining`}
        </span>
      </div>
    </div>
  );
};

export default BudgetCard;
