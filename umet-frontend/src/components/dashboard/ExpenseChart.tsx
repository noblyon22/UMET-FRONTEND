import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import { MonthlyDataPoint } from '@/types/dashboard';
import { formatCurrency } from '@/utils/formatCurrency';

interface ExpenseChartProps {
  data: MonthlyDataPoint[];
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ data }) => (
  <div className="card">
    <p className="card-title">Monthly Expenses</p>
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis tickFormatter={(v) => formatCurrency(v)} tick={{ fontSize: 12 }} />
        <Tooltip formatter={(value: number) => formatCurrency(value)} />
        <Legend />
        <Bar dataKey="expenses" name="Expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ExpenseChart;
