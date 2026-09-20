import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import Button from '@/components/common/Button';
import { CreateBudgetPayload } from '@/types/budget';
import { Category } from '@/types/category';

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

interface BudgetFormProps {
  categories: Category[];
  onSubmit: (payload: CreateBudgetPayload) => Promise<void>;
  onCancel?: () => void;
  isLoading?: boolean;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  categories,
  onSubmit,
  onCancel,
  isLoading = false,
}) => {
  const now = new Date();
  const [form, setForm] = useState({
    amount: '' as string | number,
    month: now.getMonth() + 1,
    year: now.getFullYear(),
    category_id: '' as string | number,
  });
  const [error, setError] = useState<string | null>(null);

  const setField = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.category_id) return setError('Please select a category.');
    if (!form.amount || Number(form.amount) <= 0) return setError('Enter a valid budget amount.');

    await onSubmit({
      amount: Number(form.amount),
      month: Number(form.month),
      year: Number(form.year),
      category_id: Number(form.category_id),
    });
  };

  const noCategories = categories.length === 0;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {noCategories ? (
        <div className="rounded border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          You have no categories yet.{' '}
          <Link to="/categories" className="font-medium underline hover:text-amber-900">
            Create a category
          </Link>{' '}
          before setting a budget.
        </div>
      ) : (
        <Select
          label="Category"
          value={form.category_id}
          onChange={setField('category_id')}
          placeholder="Select a category"
          options={categories.map((c) => ({ value: c.id, label: c.name }))}
          required
        />
      )}

      <Input
        label="Budget Amount"
        type="number"
        min="1"
        step="0.01"
        value={form.amount}
        onChange={setField('amount')}
        required
      />
      <div className="flex gap-3">
        <Select
          label="Month"
          value={form.month}
          onChange={setField('month')}
          options={MONTHS}
          required
        />
        <Input
          label="Year"
          type="number"
          min="2000"
          max={now.getFullYear() + 5}
          value={form.year}
          onChange={setField('year')}
          required
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex justify-end gap-3 pt-2">
        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" isLoading={isLoading} disabled={noCategories}>
          Save Budget
        </Button>
      </div>
    </form>
  );
};

export default BudgetForm;
