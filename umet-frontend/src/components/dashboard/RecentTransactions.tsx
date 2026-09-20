import React from 'react';
import { Expense } from '@/types/expense';
import { formatCurrency } from '@/utils/formatCurrency';
import { formatDate } from '@/utils/formatDate';
import EmptyState from '@/components/common/EmptyState';

interface RecentTransactionsProps {
  expenses: Expense[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ expenses }) => (
  <div className="card">
    <p className="card-title">Recent Transactions</p>
    {expenses.length === 0 ? (
      <EmptyState title="No transactions" description="Your recent expenses will appear here." />
    ) : (
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Date</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>
                <span className="badge badge-blue">{expense.category.name}</span>
              </td>
              <td className="text-gray-500">{formatDate(expense.date)}</td>
              <td className="text-right font-medium text-red-600">
                -{formatCurrency(expense.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default RecentTransactions;
