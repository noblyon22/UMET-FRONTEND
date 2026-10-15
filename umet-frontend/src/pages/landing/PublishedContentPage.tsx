import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPublishedContent } from '@/services/contentService';
import type { PublishedContent } from '@/types/content';

const PublishedContentPage: React.FC = () => {
  const { pageSlug } = useParams<{ pageSlug: string }>();
  const [content, setContent] = useState<PublishedContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!pageSlug) {
      setError('Content page not found.');
      setLoading(false);
      return;
    }

    let cancelled = false;

    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);

        const publishedContent = await getPublishedContent(pageSlug);

        if (!cancelled) {
          setContent(publishedContent);
        }
      } catch (err) {
        if (!cancelled) {
          setError('This content page could not be loaded.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadContent();

    return () => {
      cancelled = true;
    };
  }, [pageSlug]);

  if (loading) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-6 py-20">
        <p className="text-lg text-slate-600">Loading content...</p>
      </section>
    );
  }

  if (error || !content) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="mb-4 text-3xl font-bold text-slate-900">
          Content not found
        </h1>
        <p className="mb-8 max-w-xl text-slate-600">
          {error ?? 'The requested content is not available.'}
        </p>
        <Link
          to="/home"
          className="rounded-lg px-6 py-3 font-semibold shadow-sm"
        >
          Return home
        </Link>
      </section>
    );
  }

  const heading = content.hero_heading || content.title || 'UMET';
  const subheading = content.hero_subheading || '';

  return (
    <>
      <section className="bg-slate-900 px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {heading}
          </h1>

          {subheading && (
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              {subheading}
            </p>
          )}
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <div className="prose prose-slate max-w-none">
          <ReactMarkdown>{content.body_content || ''}</ReactMarkdown>
        </div>
      </article>
    </>
  );
};

export default PublishedContentPage;
