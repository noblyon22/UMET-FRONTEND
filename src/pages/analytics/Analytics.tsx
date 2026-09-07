import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/layout/Header';
import ExpenseChart from '@/components/dashboard/ExpenseChart';
import IncomeChart from '@/components/dashboard/IncomeChart';
import CategoryBreakdown from '@/components/dashboard/CategoryBreakdown';
import BudgetProgress from '@/components/budgets/BudgetProgress';
import Select from '@/components/common/Select';
import Loader from '@/components/common/Loader';
import { useDashboard } from '@/hooks/useDashboard';

const now = new Date();

const MONTHS = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
];

const YEARS = Array.from({ length: 6 }, (_, i) => now.getFullYear() - 3 + i).map((y) => ({
  value: y,
  label: String(y),
}));

const Analytics: React.FC = () => {
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);
  const { monthly, categories, budgets, isLoading } = useDashboard({ year, month });

  return (
    <PageLayout>
      <Header
        title="Analytics"
        actions={
          <div className="flex gap-2 items-center">
            <Select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              options={MONTHS}
              className="w-36"
            />
            <Select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              options={YEARS}
              className="w-24"
            />
          </div>
        }
      />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {monthly?.data && <IncomeChart data={monthly.data} />}
            {monthly?.data && <ExpenseChart data={monthly.data} />}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {categories.length > 0 && <CategoryBreakdown data={categories} />}
            {budgets.length > 0 && <BudgetProgress items={budgets} />}
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Analytics;
