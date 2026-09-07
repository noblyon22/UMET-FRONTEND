import React, { useState } from 'react';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { CreateCategoryPayload } from '@/types/category';

interface CategoryFormProps {
  onSubmit: (payload: CreateCategoryPayload) => Promise<void>;
  onCancel?: () => void;
  isLoading?: boolean;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ onSubmit, onCancel, isLoading = false }) => {
  const [form, setForm] = useState<CreateCategoryPayload>({ name: '', color: '', icon: '' });

  const set = (field: keyof CreateCategoryPayload) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input label="Name" value={form.name} onChange={set('name')} required />
      <Input label="Color (hex)" value={form.color ?? ''} onChange={set('color')} placeholder="#2563eb" />
      <Input label="Icon" value={form.icon ?? ''} onChange={set('icon')} placeholder="e.g. home, food" />
      <div className="flex justify-end gap-3 pt-2">
        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" isLoading={isLoading}>
          Save Category
        </Button>
      </div>
    </form>
  );
};

export default CategoryForm;
