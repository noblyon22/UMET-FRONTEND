import api from './api';
import { PublishedContent, PublishedContentSummary } from '@/types/content';

// GET /api/content/{page_slug}
export const getPublishedContent = async (
  pageSlug: string,
): Promise<PublishedContent> => {
  const { data } = await api.get<PublishedContent>(`/api/content/${pageSlug}`);
  return data;
};


export const getPublishedContentList = async (): Promise<PublishedContentSummary[]> => {
  const { data } = await api.get<PublishedContentSummary[]>('/api/content');
  return data;
};
