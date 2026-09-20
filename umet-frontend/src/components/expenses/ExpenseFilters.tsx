import React from 'react';
import { ExpenseFilters } from '@/types/expense';
import { Category, PaymentMethod } from '@/types/category';
import Input from '@/components/common/Input';
import Select from '@/components/common/Select';

interface ExpenseFiltersProps {
  filters: ExpenseFilters;
  categories: Category[];
  paymentMethods: PaymentMethod[];
  onChange: (filters: ExpenseFilters) => void;
}

const ExpenseFiltersBar: React.FC<ExpenseFiltersProps> = ({
  filters,
  categories,
  paymentMethods,
  onChange,
}) => {
  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange({ ...filters, search: e.target.value || undefined });

  const updateCategory = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange({ ...filters, category_id: e.target.value ? Number(e.target.value) : undefined });

  const updatePaymentMethod = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange({ ...filters, payment_method_id: e.target.value ? Number(e.target.value) : undefined });

  return (
    <div className="flex flex-wrap gap-3 mb-4">
      <Input
        placeholder="Search expenses…"
        value={filters.search ?? ''}
        onChange={updateSearch}
        className="w-48"
      />
      <Select
        value={filters.category_id ?? ''}
        onChange={updateCategory}
        placeholder="All categories"
        options={categories.map((c) => ({ value: c.id, label: c.name }))}
        className="w-44"
      />
      <Select
        value={filters.payment_method_id ?? ''}
        onChange={updatePaymentMethod}
        placeholder="All payment methods"
        options={paymentMethods.map((p) => ({ value: p.id, label: p.name }))}
        className="w-48"
      />
    </div>
  );
};

export default ExpenseFiltersBar;
