export interface PublishedContent {
  page_slug: string;
  title: string | null;
  hero_heading: string | null;
  hero_subheading: string | null;
  body_content: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  published_at: string;
  updated_at: string;
}

export interface PublishedContentSummary {
  page_slug: string;
  title: string | null;
  hero_heading: string | null;
  hero_subheading: string | null;
  meta_description: string | null;
  published_at: string;
  updated_at: string;
}
