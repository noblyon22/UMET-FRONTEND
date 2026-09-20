import React from 'react';
import { DashboardSummary } from '@/types/dashboard';
import { formatCurrency } from '@/utils/formatCurrency';

interface SummaryCardProps {
  summary: DashboardSummary;
}

const IncomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const ExpenseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </svg>
);

const BalanceIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const BudgetIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const SummaryCard: React.FC<SummaryCardProps> = ({ summary }) => {
  const isBalancePositive = summary.net_balance >= 0;

  const cards = [
    {
      label: 'Total Income',
      value: formatCurrency(summary.total_income),
      icon: <IncomeIcon />,
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600',
      valueColor: 'text-green-700',
    },
    {
      label: 'Total Expenses',
      value: formatCurrency(summary.total_expenses),
      icon: <ExpenseIcon />,
      iconBg: 'bg-red-50',
      iconColor: 'text-red-600',
      valueColor: 'text-red-700',
    },
    {
      label: 'Net Balance',
      value: formatCurrency(summary.net_balance),
      icon: <BalanceIcon />,
      iconBg: isBalancePositive ? 'bg-blue-50' : 'bg-orange-50',
      iconColor: isBalancePositive ? 'text-blue-600' : 'text-orange-600',
      valueColor: isBalancePositive ? 'text-blue-700' : 'text-orange-700',
    },
    {
      label: 'Active Budgets',
      value: String(summary.total_budgets),
      icon: <BudgetIcon />,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      valueColor: 'text-purple-700',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map(({ label, value, icon, iconBg, iconColor, valueColor }) => (
        <div key={label} className="card flex items-center gap-4">
          <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg ${iconBg} ${iconColor}`}>
            {icon}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</p>
            <p className={`mt-0.5 text-xl font-semibold ${valueColor}`}>{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;
