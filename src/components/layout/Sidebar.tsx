import React from 'react';
import { NavLink } from 'react-router-dom';

const icons: Record<string, React.ReactNode> = {
  dashboard: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  expenses: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  income: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  categories: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h4l10-10a1.41 1.41 0 0 0-4-4L4 16v4z" />
      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
    </svg>
  ),
  budgets: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  ),
  analytics: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  profile: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};

const navItems = [
  { to: '/dashboard', label: 'Dashboard', iconKey: 'dashboard' },
  { to: '/expenses', label: 'Expenses', iconKey: 'expenses' },
  { to: '/income', label: 'Income', iconKey: 'income' },
  { to: '/categories', label: 'Categories', iconKey: 'categories' },
  { to: '/budgets', label: 'Budgets', iconKey: 'budgets' },
  { to: '/analytics', label: 'Analytics', iconKey: 'analytics' },
  { to: '/profile', label: 'Profile', iconKey: 'profile' },
];

const Sidebar: React.FC = () => (
  <aside className="hidden md:flex flex-col w-56 min-h-screen bg-gray-900 text-white py-6">
    <div className="px-6 mb-8">
      <p className="text-base font-bold tracking-tight text-white leading-tight">UMET</p>
      <p className="text-[10px] font-normal text-gray-400 tracking-wide mt-0.5">Ultimate Move Expense Tracker</p>
    </div>
    <nav className="flex flex-col gap-0.5 px-3">
      {navItems.map(({ to, label, iconKey }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded px-3 py-2 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`
          }
        >
          <span className="flex-shrink-0">{icons[iconKey]}</span>
          {label}
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
