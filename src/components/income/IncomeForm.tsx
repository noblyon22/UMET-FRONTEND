import React, { useState } from 'react';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { CreateIncomePayload } from '@/types/income';

interface IncomeFormProps {
  onSubmit: (payload: CreateIncomePayload) => Promise<void>;
  onCancel?: () => void;
  isLoading?: boolean;
}

const IncomeForm: React.FC<IncomeFormProps> = ({ onSubmit, onCancel, isLoading = false }) => {
  const [form, setForm] = useState<CreateIncomePayload>({
    amount: 0,
    source: '',
    description: '',
    date: new Date().toISOString().slice(0, 10),
  });

  const set = (field: keyof CreateIncomePayload) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({ ...form, amount: Number(form.amount) });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input label="Source" value={form.source} onChange={set('source')} required />
      <Input
        label="Amount"
        type="number"
        min="0.01"
        step="0.01"
        value={form.amount}
        onChange={set('amount')}
        required
      />
      <Input label="Date" type="date" value={form.date} onChange={set('date')} required />
      <Input label="Description (optional)" value={form.description ?? ''} onChange={set('description')} />
      <div className="flex justify-end gap-3 pt-2">
        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" isLoading={isLoading}>
          Save Income
        </Button>
      </div>
    </form>
  );
};

export default IncomeForm;
