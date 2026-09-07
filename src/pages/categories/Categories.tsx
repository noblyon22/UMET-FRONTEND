import React, { useContext, useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import CategoryForm from '@/components/categories/CategoryForm';
import CategoryList from '@/components/categories/CategoryList';
import Loader from '@/components/common/Loader';
import { AppContext } from '@/context/AppContext';
import { createCategory } from '@/services/categoryService';
import { CreateCategoryPayload } from '@/types/category';

const Categories: React.FC = () => {
  const { categories, isLoadingMeta, refreshMeta } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreate = async (payload: CreateCategoryPayload) => {
    if (!payload.name.trim()) return;
    setIsSaving(true);
    setError(null);
    try {
      await createCategory(payload);
      await refreshMeta();
      setIsModalOpen(false);
    } catch (err: any) {
      setError(err?.response?.data?.detail ?? 'Failed to create category.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <PageLayout>
      <Header
        title="Categories"
        subtitle="Organise your expenses into categories."
        actions={
          <Button onClick={() => setIsModalOpen(true)}>Add Category</Button>
        }
      />

      {isLoadingMeta ? (
        <Loader />
      ) : (
        <div className="card max-w-lg">
          <CategoryList categories={categories} />
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="New Category">
        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
        <CategoryForm
          onSubmit={handleCreate}
          onCancel={() => setIsModalOpen(false)}
          isLoading={isSaving}
        />
      </Modal>
    </PageLayout>
  );
};

export default Categories;
