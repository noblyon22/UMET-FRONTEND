import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPublishedContent } from '@/services/contentService';
import type { PublishedContent } from '@/types/content';

const Pricing: React.FC = () => {
  const [content, setContent] = useState<PublishedContent | null>(null);

  useEffect(() => {
    let mounted = true;

    getPublishedContent('pricing')
      .then((data) => {
        if (mounted) {
          setContent(data);
        }
      })
      .catch(() => {
        // Keep the pricing structure available if published content is temporarily unavailable.
      });

    return () => {
      mounted = false;
    };
  }, []);

  const heading =
    content?.hero_heading || content?.title || 'Simple, honest pricing';

  const subheading =
    content?.hero_subheading ||
    'UMET is free. Full stop. No plans, no upsells, no trial periods.';

  const body = content?.body_content || '';

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{heading}</h1>
          <p className="text-gray-500 text-lg leading-relaxed">{subheading}</p>
        </div>
      </section>

      {/* Pricing card */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-sm mx-auto">
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-blue-600 px-8 py-8 text-white text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-2">
                Free forever
              </p>
              <p className="text-5xl font-bold mb-1">£0</p>
              <p className="text-blue-100 text-sm">No credit card required</p>
            </div>

            <div className="bg-white px-8 py-8">
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Everything you need to track expenses, manage income, set budgets,
                and understand your finances.
              </p>

              <Link
                to="/register"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors text-sm"
              >
                Create free account
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-5">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </section>

      {/* Published pricing content */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          {body ? (
            <article
              className="
                prose prose-gray max-w-none
                prose-headings:font-semibold prose-headings:text-gray-900
                prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-li:text-gray-600
                prose-strong:text-gray-900
              "
            >
              <ReactMarkdown>{body}</ReactMarkdown>
            </article>
          ) : (
            <p className="text-center text-gray-500">
              Published pricing information is not available yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Pricing;
