import React from 'react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: 'Track every expense',
    desc: 'Log spending in seconds. Categorise automatically and see exactly where your money goes each month.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Monitor all income',
    desc: 'Record salary, freelance work, rental income — every source in one clear view.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    title: 'Budgets that work',
    desc: 'Set monthly limits per category and get real-time progress bars so you never overspend.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Powerful analytics',
    desc: 'Charts, trends, and breakdowns turn raw numbers into clear financial insight.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Secure by default',
    desc: 'Your data is encrypted at rest and in transit. We never sell your financial information.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Works on any device',
    desc: 'Fully responsive — use it on desktop, tablet, or mobile without installing anything.',
  },
];

const stats = [
  { icon: '❝', value: 'Free', label: 'SIGN-UP', sub: 'No credit card needed' },
  { icon: '◎', value: '4', label: 'CORE TOOLS', sub: 'Expenses · Income · Budgets · Analytics' },
  { icon: '♦', value: '100%', label: 'WEB-BASED', sub: 'No install required' },
  { icon: '♛', value: 'ONE', label: 'DASHBOARD', sub: 'Your whole financial picture' },
];

const Home: React.FC = () => (
  <>
    {/* ── Hero ── */}
    <section className="relative bg-navy-900 text-white overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 opacity-90" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #c9a227 0, #c9a227 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-28 lg:py-36 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-5">
            A tool. A plan. A lasting legacy.
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-white">
            TAKE CONTROL OF YOUR MONEY
          </h1>
          <p className="text-gold-400 font-semibold text-lg italic mb-4">
            Omukama Atulize. Enkuba Etutire.
          </p>
          <p className="text-white/70 text-base leading-relaxed max-w-md mb-10">
            UMET brings all your expenses, income, and budgets into one clean dashboard — so
            you always know exactly where you stand financially.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-7 py-3.5 rounded transition-colors text-sm uppercase tracking-wide"
            >
              ♦ Get started free
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded transition-colors text-sm uppercase tracking-wide"
            >
              Learn more →
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex justify-end">
          <p className="italic text-white/60 text-right text-lg leading-relaxed max-w-xs">
            A people united in purpose,<br />in clarity and in hope.
          </p>
        </div>
      </div>
    </section>

    {/* ── Stats strip ── */}
    <section className="bg-white border-b border-gold-200/60">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-gold-100">
        {stats.map(({ icon, value, label, sub }) => (
          <div key={label} className="px-6 first:pl-0 last:pr-0 py-2">
            <div className="flex items-start gap-3">
              <span className="text-gold-500 text-2xl leading-none mt-0.5">{icon}</span>
              <div>
                <p className="font-serif text-2xl font-bold text-gold-500 leading-none">{value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-navy-900 mt-0.5">{label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ── How it works ── */}
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-2">UMET</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900">
            One place for your entire financial picture
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: '01',
              title: 'Add your transactions',
              body: 'Log expenses and income manually or import them. Tag each entry with a category for instant organisation.',
            },
            {
              step: '02',
              title: 'Set your budgets',
              body: "Define monthly spending limits per category. UMET shows you a live progress bar so you know exactly how much you've used.",
            },
            {
              step: '03',
              title: 'Review & improve',
              body: 'Check the analytics dashboard each month to spot trends, cut wasteful spending, and plan ahead.',
            },
          ].map(({ step, title, body }) => (
            <div
              key={step}
              className="bg-white border border-gold-100 rounded p-7 relative overflow-hidden"
            >
              <span
                className="absolute top-4 right-5 font-serif font-bold text-6xl text-gold-100 select-none leading-none"
              >
                {step}
              </span>
              <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3">{step}</p>
              <h3 className="font-serif text-lg font-bold text-navy-900 mb-3">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Benefits grid ── */}
    <section className="py-20 px-6 bg-white border-t border-gold-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-2">Features</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-3">
            Everything you need, nothing you don't
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Thoughtfully built for people who want real financial control without the complexity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-cream border border-gold-100 rounded p-6 flex flex-col gap-4"
            >
              <span className="text-gold-500">{icon}</span>
              <div>
                <h3 className="font-serif text-base font-bold text-navy-900 mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="py-20 px-6 bg-navy-900 text-white text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #c9a227 0, #c9a227 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative max-w-2xl mx-auto">
        <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">Join UMET</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to take control?</h2>
        <p className="text-white/60 mb-10 text-sm leading-relaxed">
          Create your free account in under a minute. No payment details required.
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

export default Home;
