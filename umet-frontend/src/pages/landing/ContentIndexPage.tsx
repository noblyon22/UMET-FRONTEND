import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPublishedContentList } from '@/services/contentService';
import type { PublishedContentSummary } from '@/types/content';

const ContentIndexPage: React.FC = () => {
  const [content, setContent] = useState<PublishedContentSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    getPublishedContentList()
      .then((data) => {
        if (mounted) {
          setContent(data);
        }
      })
      .catch(() => {
        if (mounted) {
          setError(true);
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
            UMET Resources
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Insights for smarter personal finances
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Practical guides on tracking expenses, budgeting, monitoring income
            and planning your personal finances.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {loading && (
            <p className="text-center text-gray-500">
              Loading resources...
            </p>
          )}

          {!loading && error && (
            <p className="text-center text-gray-500">
              Resources could not be loaded right now. Please try again later.
            </p>
          )}

          {!loading && !error && content.length === 0 && (
            <p className="text-center text-gray-500">
              No published resources are available yet.
            </p>
          )}

          {!loading && !error && content.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.map((item) => {
                const title = item.hero_heading || item.title || item.page_slug;
                const description =
                  item.meta_description ||
                  item.hero_subheading ||
                  'Explore this UMET resource.';

                return (
                  <article
                    key={item.page_slug}
                    className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        {title}
                      </h2>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {description}
                      </p>
                    </div>

                    <Link
                      to={`/${item.page_slug}`}
                      className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Read article
                      <span aria-hidden="true" className="ml-1">
                        →
                      </span>
                    </Link>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ContentIndexPage;
