import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const navItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/expenses', label: 'Expenses' },
  { to: '/income', label: 'Income' },
  { to: '/categories', label: 'Categories' },
  { to: '/budgets', label: 'Budgets' },
  { to: '/analytics', label: 'Analytics' },
];

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-0 flex items-center justify-between h-14">
      <Link to="/dashboard" className="flex flex-col leading-tight">
        <span className="text-sm font-bold text-gray-900 tracking-tight">UMET</span>
        <span className="text-[10px] font-normal text-gray-400 tracking-wide">Ultimate Move Expense Tracker</span>
      </Link>

      <ul className="hidden md:flex gap-1">
        {navItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `inline-block px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        {user?.full_name && (
          <span className="text-sm text-gray-500">{user.full_name}</span>
        )}
        <button
          onClick={signOut}
          className="text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-300 rounded px-3 py-1.5 transition-colors hover:border-gray-400"
        >
          Sign out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
