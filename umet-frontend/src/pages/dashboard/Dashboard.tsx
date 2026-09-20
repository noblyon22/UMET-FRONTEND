import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/layout/Header';
import SummaryCard from '@/components/dashboard/SummaryCard';
import ExpenseChart from '@/components/dashboard/ExpenseChart';
import IncomeChart from '@/components/dashboard/IncomeChart';
import CategoryBreakdown from '@/components/dashboard/CategoryBreakdown';
import BudgetProgress from '@/components/budgets/BudgetProgress';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import Loader from '@/components/common/Loader';
import { useDashboard } from '@/hooks/useDashboard';
import { useExpenses } from '@/hooks/useExpenses';

const now = new Date();

const Dashboard: React.FC = () => {
  const { summary, monthly, categories, budgets, isLoading, error } = useDashboard({
    year: now.getFullYear(),
    month: now.getMonth() + 1,
  });
  // Fetch only the 10 most recent expenses — avoids pulling the entire history
  // just to display a short list. The backend receives limit=10 as a query param.
  const { expenses } = useExpenses({ limit: 10 });

  if (isLoading) return <Loader fullPage />;

  return (
    <PageLayout>
      <Header
        title="Dashboard"
        subtitle={now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      />

      {error && (
        <div className="mb-4 p-3 rounded bg-red-50 text-red-600 text-sm">{error}</div>
      )}

      <SummaryCard
        summary={summary ?? { total_income: 0, total_expenses: 0, net_balance: 0, total_budgets: 0 }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <IncomeChart data={monthly?.data ?? []} />
        <ExpenseChart data={monthly?.data ?? []} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <CategoryBreakdown data={categories} />
        <BudgetProgress items={budgets} />
      </div>

      <div className="mt-6">
        <RecentTransactions expenses={expenses} />
      </div>
    </PageLayout>
  );
};

export default Dashboard;
