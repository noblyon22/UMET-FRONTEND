import React from 'react';
import { Link } from 'react-router-dom';

const values = [
  {
    title: 'Clarity first',
    desc: 'We strip away complexity. Every screen, every number, every chart exists to give you faster financial clarity — not to impress you with features.',
  },
  {
    title: 'Privacy by design',
    desc: 'Your financial data is yours. We encrypt everything, never sell your data, and only collect what is strictly necessary to run the product.',
  },
  {
    title: 'Built for real life',
    desc: 'Moving home, switching jobs, managing a side hustle — UMET is designed for the financial situations people actually face, not idealised ones.',
  },
  {
    title: 'Honest and transparent',
    desc: "No dark patterns, no surprise charges, no 'free trial' that auto-bills you. What you see is what you get.",
  },
];

const pageGuide = [
  'Our Story',
  'What We Stand For',
  'Built on Solid Foundations',
  'Join UMET',
];

const About: React.FC = () => (
  <>
    {/* ── Page banner header ── */}
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
        <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">UMET</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">About UMET</h1>
      </div>
    </section>

    {/* ── Main content + page guide ── */}
    <section className="bg-cream py-16 px-6">
      <div className="max-w-6xl mx-auto flex gap-12">

        {/* Main content */}
        <div className="flex-1 min-w-0">

          {/* Intro */}
          <div className="text-navy-900 leading-relaxed mb-10">
            <p className="text-base mb-4">
              UMET — the <strong>Ultimate Move Expense Tracker</strong> — was built because
              personal finance tools were either too simple to be useful or too complex to use
              every day.
            </p>
            <p className="text-base text-gray-600">
              We believe everyone deserves a clear, honest view of their finances without
              expensive subscriptions or complicated interfaces.
            </p>
          </div>

          {/* Our Story */}
          <div id="our-story" className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-5">Our Story</h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                UMET started as a solution to a simple problem: keeping track of all the costs that come
                with moving home. Deposits, removals, new furniture, utility set-ups — the bills
                pile up fast and it's easy to lose track.
              </p>
              <p>
                What began as a lightweight tool for one specific life event quickly grew into
                something broader. The same discipline that helps you manage a house move applies
                to everyday budgeting: log it, categorise it, review it, improve it.
              </p>
              <p>
                Today, UMET is a full personal finance tracker for anyone who wants a clean,
                honest view of their income, spending, and budgets — without spreadsheets or
                expensive subscription software.
              </p>
              <p>
                We're built with British users in mind — GBP by default, sensible categories,
                and no American-centric assumptions baked in.
              </p>
            </div>
          </div>

          {/* What We Stand For */}
          <div id="what-we-stand-for" className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">What We Stand For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map(({ title, desc }) => (
                <div key={title} className="bg-white border border-gold-100 rounded p-6">
                  <h3 className="font-serif text-base font-bold text-navy-900 mb-2">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Built on solid foundations */}
          <div id="built-on-solid-foundations" className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">Built on Solid Foundations</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              UMET is a modern web application built with React, TypeScript, and Tailwind CSS on the
              frontend. The backend is a RESTful API. We use token-based authentication and all
              communication is encrypted over HTTPS.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              We chose this stack for its speed, reliability, and longevity — tools we're confident
              will still be running well five years from now.
            </p>
          </div>

        </div>

        {/* Page guide sidebar */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <div className="sticky top-24 border border-gold-200 rounded bg-white overflow-hidden">
            <div className="border-t-4 border-gold-500 px-5 pt-4 pb-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-1">Page Guide</p>
              <p className="font-serif text-lg font-bold text-navy-900">On This Page</p>
            </div>
            <ul className="divide-y divide-gray-100">
              {pageGuide.map((item, i) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
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

    {/* ── CTA ── */}
    <section id="join-umet" className="py-16 px-6 bg-navy-900 text-white text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #c9a227 0, #c9a227 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative max-w-xl mx-auto">
        <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">Join UMET</p>
        <h2 className="font-serif text-3xl font-bold mb-3">Join UMET today</h2>
        <p className="text-white/60 text-sm mb-8 leading-relaxed">
          Free, private, and ready to use in under a minute.
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

export default About;
