import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPublishedContent } from '@/services/contentService';
import type { PublishedContent } from '@/types/content';

const pageGuide = [
  'Our Story',
  'What We Stand For',
  'Built on Solid Foundations',
  'Join UMET',
];

const headingId = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const About: React.FC = () => {
  const [content, setContent] = useState<PublishedContent | null>(null);

  useEffect(() => {
    let mounted = true;

    getPublishedContent('about')
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

  const heading = content?.hero_heading || content?.title || 'About UMET';
  const subheading =
    content?.hero_subheading ||
    'A simpler way to understand and manage your money.';
  const body = content?.body_content || '';

  return (
    <>
      {/* Page banner header */}
      <section className="bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #c9a227 0, #c9a227 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            UMET
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">
            {heading}
          </h1>
          <p className="text-white/60 text-sm mt-4 max-w-2xl leading-relaxed">
            {subheading}
          </p>
        </div>
      </section>

      {/* Main content + page guide */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-6xl mx-auto flex gap-12">
          <div className="flex-1 min-w-0">
            {body ? (
              <article
                className="
                  prose prose-gray max-w-none
                  prose-headings:font-serif prose-headings:font-bold prose-headings:text-navy-900
                  prose-h2:text-2xl prose-h2:mb-5
                  prose-h3:text-base prose-h3:mb-2
                  prose-p:text-sm prose-p:text-gray-600 prose-p:leading-relaxed
                  prose-li:text-sm prose-li:text-gray-600
                  prose-strong:text-navy-900
                "
              >
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => {
                      const text = String(children);
                      return (
                        <h2 id={headingId(text)}>{children}</h2>
                      );
                    },
                    h3: ({ children }) => {
                      const text = String(children);
                      return (
                        <h3 id={headingId(text)}>{children}</h3>
                      );
                    },
                  }}
                >
                  {body}
                </ReactMarkdown>
              </article>
            ) : (
              <p className="text-center text-gray-500">
                Published About information is not available yet.
              </p>
            )}
          </div>

          {/* Page guide sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24 border border-gold-200 rounded bg-white overflow-hidden">
              <div className="border-t-4 border-gold-500 px-5 pt-4 pb-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-1">
                  Page Guide
                </p>
                <p className="font-serif text-lg font-bold text-navy-900">
                  On This Page
                </p>
              </div>

              <ul className="divide-y divide-gray-100">
                {pageGuide.map((item, i) => (
                  <li key={item}>
                    <a
                      href={`#${headingId(item)}`}
                      className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:text-navy-900 hover:bg-cream transition-colors"
                    >
                      <span className="text-gold-500 text-xs font-bold w-5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section
        id="join-umet"
        className="py-16 px-6 bg-[#6b0a0a] text-white text-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #c9a227 0, #c9a227 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative max-w-xl mx-auto">
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Join UMET
          </p>

          <h2 className="font-serif text-3xl font-bold mb-3">
            Join UMET today
          </h2>

          <p className="text-white/60 text-sm mb-8 leading-relaxed">
            Free, private and ready to use in under a minute.
          </p>

          <Link
            to="/register"
            className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-10 py-4 rounded transition-colors text-sm uppercase tracking-wide"
          >
            Create free account
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
