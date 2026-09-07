import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import Button from '@/components/common/Button';
import { CreateExpensePayload } from '@/types/expense';
import { Category, PaymentMethod } from '@/types/category';
import { createCategory } from '@/services/categoryService';
import { AppContext } from '@/context/AppContext';

interface ExpenseFormProps {
  categories: Category[];
  paymentMethods: PaymentMethod[];
  onSubmit: (payload: CreateExpensePayload) => Promise<void>;
  onCancel?: () => void;
  isLoading?: boolean;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  categories,
  paymentMethods,
  onSubmit,
  onCancel,
  isLoading = false,
}) => {
  const { refreshMeta } = useContext(AppContext);

  const [form, setForm] = useState({
    amount: '' as string | number,
    description: '',
    date: new Date().toISOString().slice(0, 10),
    category_id: '' as string | number,
    payment_method_id: '' as string | number,
  });
  const [error, setError] = useState<string | null>(null);

  // Inline quick-create category state
  const [showNewCat, setShowNewCat] = useState(false);
  const [newCatName, setNewCatName] = useState('');
  const [isCreatingCat, setIsCreatingCat] = useState(false);
  const [catError, setCatError] = useState<string | null>(null);

  const setField = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleCreateCategory = async () => {
    if (!newCatName.trim()) return;
    setIsCreatingCat(true);
    setCatError(null);
    try {
      const created = await createCategory({ name: newCatName.trim() });
      await refreshMeta();
      setForm((prev) => ({ ...prev, category_id: created.id }));
      setNewCatName('');
      setShowNewCat(false);
    } catch {
      setCatError('Failed to create category. Try again.');
    } finally {
      setIsCreatingCat(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.category_id) return setError('Please select a category.');
    if (!form.payment_method_id) return setError('Please select a payment method.');

    await onSubmit({
      description: form.description,
      date: form.date,
      amount: Number(form.amount),
      category_id: Number(form.category_id),
      payment_method_id: Number(form.payment_method_id),
    });
  };

  const noCategories = categories.length === 0;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Description"
        value={form.description}
        onChange={setField('description')}
        required
      />
      <Input
        label="Amount"
        type="number"
        min="0.01"
        step="0.01"
        value={form.amount}
        onChange={setField('amount')}
        required
      />
      <Input label="Date" type="date" value={form.date} onChange={setField('date')} required />

      {/* ── Category field ── */}
      {noCategories ? (
        <div className="rounded border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          You have no categories yet.{' '}
          <Link to="/categories" className="font-medium underline hover:text-amber-900">
            Create a category
          </Link>{' '}
          before adding an expense.
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Category</label>
            <button
              type="button"
              onClick={() => { setShowNewCat((v) => !v); setCatError(null); }}
              className="text-xs text-blue-600 hover:underline"
            >
              {showNewCat ? 'Cancel' : '+ New category'}
            </button>
          </div>

          {showNewCat ? (
            <div className="flex gap-2">
              <input
                className="block flex-1 rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Category name"
                value={newCatName}
                onChange={(e) => setNewCatName(e.target.value)}
                autoFocus
              />
              <Button
                type="button"
                size="sm"
                onClick={handleCreateCategory}
                isLoading={isCreatingCat}
                disabled={!newCatName.trim()}
              >
                Add
              </Button>
            </div>
          ) : (
            <Select
              value={form.category_id}
              onChange={setField('category_id')}
              placeholder="Select a category"
              options={categories.map((c) => ({ value: c.id, label: c.name }))}
              required
            />
          )}

          {catError && <p className="text-xs text-red-600">{catError}</p>}
        </div>
      )}

      <Select
        label="Payment Method"
        value={form.payment_method_id}
        onChange={setField('payment_method_id')}
        placeholder="Select a payment method"
        options={paymentMethods.map((p) => ({ value: p.id, label: p.name }))}
        required
      />

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex justify-end gap-3 pt-2">
        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" isLoading={isLoading} disabled={noCategories || showNewCat}>
          Save Expense
        </Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
