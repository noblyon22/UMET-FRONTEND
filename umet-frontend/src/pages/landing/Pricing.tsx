import React from 'react';
import { Link } from 'react-router-dom';

const freeFeatures = [
  'Unlimited expense entries',
  'Unlimited income records',
  'Up to 10 budget categories',
  'Dashboard & analytics',
  'CSV export',
  'Mobile-friendly interface',
  'Secure account with email login',
];

const faqs = [
  {
    q: 'Is UMET really free?',
    a: 'Yes. The current version of UMET is completely free to use. There are no hidden charges, no credit card required to sign up, and no feature gating on the free tier.',
  },
  {
    q: 'Will there ever be a paid plan?',
    a: 'We may introduce a Pro plan in the future with advanced features such as bank feed integrations, receipt scanning, and team accounts. Existing free users will always have access to the core feature set.',
  },
  {
    q: 'Is my data safe?',
    a: 'Absolutely. All data is encrypted in transit (HTTPS) and at rest. We do not sell, share, or monetise your personal financial data in any way.',
  },
  {
    q: 'Can I export my data?',
    a: 'Yes — you can export your expenses and income as CSV at any time from your account settings.',
  },
  {
    q: 'Do I need to install anything?',
    a: 'No. UMET is fully web-based. It works in any modern browser on desktop, tablet, or mobile without any installation.',
  },
];

const Pricing: React.FC = () => (
  <>
    {/* ── Header ── */}
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 border-b border-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, honest pricing</h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          UMET is free. Full stop. No plans, no upsells, no trial periods.
        </p>
      </div>
    </section>

    {/* ── Pricing card ── */}
    <section className="py-20 px-6 bg-white">
      <div className="max-w-sm mx-auto">
        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-blue-600 px-8 py-8 text-white text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-2">Free forever</p>
            <p className="text-5xl font-bold mb-1">£0</p>
            <p className="text-blue-100 text-sm">No credit card required</p>
          </div>
          <div className="bg-white px-8 py-8">
            <ul className="space-y-3 mb-8">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                  <svg
                    className="w-4 h-4 text-green-500 shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
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

    {/* ── FAQs ── */}
    <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-white border border-gray-100 rounded-xl p-6">
              <p className="text-sm font-semibold text-gray-900 mb-2">{q}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Pricing;
