import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { MonthlyDataPoint } from '@/types/dashboard';
import { formatCurrency } from '@/utils/formatCurrency';

interface IncomeChartProps {
  data: MonthlyDataPoint[];
}

const IncomeChart: React.FC<IncomeChartProps> = ({ data }) => (
  <div className="card">
    <p className="card-title">Monthly Income</p>
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15} />
            <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis tickFormatter={(v) => formatCurrency(v)} tick={{ fontSize: 12 }} />
        <Tooltip formatter={(value: number) => formatCurrency(value)} />
        <Area
          type="monotone"
          dataKey="income"
          name="Income"
          stroke="#2563eb"
          fill="url(#incomeGrad)"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default IncomeChart;
