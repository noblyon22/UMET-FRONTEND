import React from 'react';
import { Income } from '@/types/income';
import { formatCurrency } from '@/utils/formatCurrency';
import { formatDate } from '@/utils/formatDate';
import EmptyState from '@/components/common/EmptyState';

interface IncomeTableProps {
  incomeList: Income[];
  onEdit?: (income: Income) => void;
  onDelete?: (id: number) => void;
}

const IncomeTable: React.FC<IncomeTableProps> = ({ incomeList, onEdit, onDelete }) => {
  if (incomeList.length === 0) {
    return <EmptyState title="No income records" description="Add your first income entry to get started." />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Source</th>
            <th>Description</th>
            <th>Date</th>
            <th className="text-right">Amount</th>
            {(onEdit || onDelete) && <th />}
          </tr>
        </thead>
        <tbody>
          {incomeList.map((income) => (
            <tr key={income.id}>
              <td className="font-medium">{income.source}</td>
              <td className="text-gray-500">{income.description ?? '—'}</td>
              <td className="text-gray-500">{formatDate(income.date)}</td>
              <td className="text-right font-medium text-green-600">
                +{formatCurrency(income.amount)}
              </td>
              {(onEdit || onDelete) && (
                <td className="text-right">
                  <div className="flex justify-end gap-3">
                    {onEdit && (
                      <button
                        onClick={() => onEdit(income)}
                        className="text-xs text-blue-600 hover:underline"
                      >
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
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeTable;
