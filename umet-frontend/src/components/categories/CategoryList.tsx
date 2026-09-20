import React from 'react';
import { Category } from '@/types/category';
import EmptyState from '@/components/common/EmptyState';

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  if (categories.length === 0) {
    return <EmptyState title="No categories" description="Create a category to get started." />;
  }

  return (
    <ul className="divide-y divide-gray-100">
      {categories.map((cat) => (
        <li key={cat.id} className="flex items-center gap-3 py-3">
          <span
            className="h-3 w-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: cat.color ?? '#6b7280' }}
          />
          <span className="text-sm font-medium text-gray-800">{cat.name}</span>
          {cat.icon && (
            <span className="ml-auto text-xs text-gray-400">{cat.icon}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
