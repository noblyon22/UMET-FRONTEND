import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPublishedContent } from '@/services/contentService';
import type { PublishedContent } from '@/types/content';

const Features: React.FC = () => {
  const [content, setContent] = useState<PublishedContent | null>(null);

  useEffect(() => {
    let mounted = true;

    getPublishedContent('features')
      .then((data) => {
        if (mounted) {
          setContent(data);
        }
      })
      .catch(() => {
        // Keep the page shell available if published content is temporarily unavailable.
      });

    return () => {
      mounted = false;
    };
  }, []);

  const heading = content?.hero_heading || content?.title || 'Everything in one place';
  const subheading =
    content?.hero_subheading ||
    'UMET is built around four core pillars: expense tracking, income management, budgeting, and analytics.';
  const body = content?.body_content || '';

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{heading}</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
            {subheading}
          </p>
        </div>
      </section>

      {/* Published content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {body ? (
            <article
              className="
                prose prose-gray max-w-none
                prose-headings:font-semibold prose-headings:text-gray-900
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-li:text-gray-600
                prose-strong:text-gray-900
                prose-a:text-blue-600
              "
            >
              <ReactMarkdown>{body}</ReactMarkdown>
            </article>
          ) : (
            <p className="text-center text-gray-500">
              Published feature information is not available yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-100 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Ready to try it yourself?
          </h2>
          <p className="text-gray-500 text-sm mb-7">
            Create a free account and start tracking in under a minute.
          </p>
          <Link
            to="/register"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Get started free
          </Link>
        </div>
      </section>
    </>
  );
};

export default Features;
