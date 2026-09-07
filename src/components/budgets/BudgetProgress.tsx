import React from 'react';
import { BudgetDashboardItem } from '@/types/dashboard';
import { formatCurrency } from '@/utils/formatCurrency';

interface BudgetProgressProps {
  items: BudgetDashboardItem[];
}

const BudgetProgress: React.FC<BudgetProgressProps> = ({ items }) => (
  <div className="card">
    <p className="card-title">Budget Progress</p>
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const isOver = item.spent > item.budgeted;
        return (
          <div key={item.budget_id}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{item.category_name}</span>
              <span className={`text-sm ${isOver ? 'text-red-600' : 'text-gray-600'}`}>
                {formatCurrency(item.spent)} / {formatCurrency(item.budgeted)}
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar__fill"
                style={{
                  width: `${Math.min(item.percentage_used, 100)}%`,
                  backgroundColor: isOver ? '#dc2626' : '#2563eb',
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default BudgetProgress;
