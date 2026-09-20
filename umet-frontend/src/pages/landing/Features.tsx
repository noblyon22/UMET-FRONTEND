import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    category: 'Expense Tracking',
    color: 'blue',
    items: [
      { title: 'Quick-add expenses', desc: 'Log a transaction in seconds — just amount, category, and date.' },
      { title: 'Category tagging', desc: 'Assign expenses to custom categories like Rent, Groceries, Transport, or Utilities.' },
      { title: 'Expense table & filters', desc: 'Sort and filter your full expense history by date, amount, or category.' },
      { title: 'Expense details view', desc: 'Drill into any expense to see its full details, notes, and history.' },
      { title: 'Monthly summaries', desc: 'See your total spending per month at a glance on the dashboard.' },
    ],
  },
  {
    category: 'Income Management',
    color: 'green',
    items: [
      { title: 'Multiple income sources', desc: 'Track salary, freelance, rental, investments, or any custom income type.' },
      { title: 'Income history table', desc: 'A clear, filterable list of all income entries in chronological order.' },
      { title: 'Income vs expense overview', desc: 'See your net position — income minus outgoings — at any time.' },
      { title: 'Income trends chart', desc: 'Visualise how your income changes month over month.' },
    ],
  },
  {
    category: 'Budgets',
    color: 'purple',
    items: [
      { title: 'Per-category budgets', desc: 'Set a monthly spending limit for each category independently.' },
      { title: 'Live progress bars', desc: 'See exactly how much of each budget you have remaining in real time.' },
      { title: 'Over-budget alerts', desc: 'Progress bars turn red when you exceed a budget so you notice immediately.' },
      { title: 'Budget overview cards', desc: 'All budgets on one page — allocated, spent, and remaining at a glance.' },
    ],
  },
  {
    category: 'Analytics & Dashboard',
    color: 'orange',
    items: [
      { title: 'Summary cards', desc: 'Total income, total expenses, and net balance displayed prominently.' },
      { title: 'Expense breakdown chart', desc: 'A visual breakdown of spending by category to spot where money is going.' },
      { title: 'Trend charts', desc: 'Line and bar charts showing spending and income trends over time.' },
      { title: 'Recent transactions', desc: 'Your last few transactions listed directly on the dashboard for a quick review.' },
      { title: 'Category breakdown', desc: 'A proportional view of how each category compares to overall spending.' },
    ],
  },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-700 border-blue-100',
  green: 'bg-green-50 text-green-700 border-green-100',
  purple: 'bg-purple-50 text-purple-700 border-purple-100',
  orange: 'bg-orange-50 text-orange-700 border-orange-100',
};

const dotMap: Record<string, string> = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  purple: 'bg-purple-500',
  orange: 'bg-orange-500',
};

const Features: React.FC = () => (
  <>
    {/* ── Header ── */}
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 border-b border-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Everything in one place</h1>
        <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
          UMET is built around four core pillars: expense tracking, income management, budgeting,
          and analytics. Here's exactly what you get.
        </p>
      </div>
    </section>

    {/* ── Feature sections ── */}
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto space-y-16">
        {features.map(({ category, color, items }) => (
          <div key={category}>
            <div className="flex items-center gap-3 mb-8">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full border ${colorMap[color]}`}
              >
                {category}
              </span>
              <span className="flex-1 h-px bg-gray-100" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map(({ title, desc }) => (
                <div key={title} className="flex gap-3">
                  <span className={`mt-1.5 shrink-0 w-2 h-2 rounded-full ${dotMap[color]}`} />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">{title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="py-16 px-6 bg-gray-50 border-t border-gray-100 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Ready to try it yourself?</h2>
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

export default Features;
