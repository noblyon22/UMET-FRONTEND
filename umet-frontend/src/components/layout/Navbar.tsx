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
    <nav className="bg-navy-900 border-b border-navy-800 px-6 py-0 flex items-center justify-between h-14">
      <Link to="/dashboard" className="flex flex-col leading-tight">
        <span className="font-serif text-sm font-bold text-white tracking-tight">UMET</span>
        <span className="text-[10px] font-normal text-gold-400 tracking-widest uppercase">Expense Tracker</span>
      </Link>

      <ul className="hidden md:flex gap-1">
        {navItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `inline-block px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-gold-400'
                    : 'text-white/60 hover:text-white'
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
          <span className="text-sm text-white/50">{user.full_name}</span>
        )}
        <button
          onClick={signOut}
          className="text-sm font-medium text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded px-3 py-1.5 transition-colors"
        >
          Sign out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
