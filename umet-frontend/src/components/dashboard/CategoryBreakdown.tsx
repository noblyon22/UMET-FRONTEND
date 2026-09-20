import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CategoryBreakdownItem } from '@/types/dashboard';
import { formatCurrency } from '@/utils/formatCurrency';

const COLORS = ['#2563eb', '#ef4444', '#16a34a', '#d97706', '#7c3aed', '#0891b2', '#db2777'];

interface CategoryBreakdownProps {
  data: CategoryBreakdownItem[];
}

const CategoryBreakdown: React.FC<CategoryBreakdownProps> = ({ data }) => (
  <div className="card">
    <p className="card-title">Spending by Category</p>
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie
          data={data}
          dataKey="total"
          nameKey="category_name"
          cx="50%"
          cy="50%"
          outerRadius={90}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((_entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value: number) => formatCurrency(value)} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default CategoryBreakdown;
