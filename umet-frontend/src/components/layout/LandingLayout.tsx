import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const landingNavItems = [
  { to: '/home', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
];

const LandingLayout: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-cream font-sans text-navy-900">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 bg-navy-900 border-b border-navy-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/home" className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-white font-serif">UMET</span>
            <span className="text-[10px] font-normal text-gold-400 tracking-widest uppercase">
              Ultimate Move Expense Tracker
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {landingNavItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-gold-400'
                      : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="text-sm font-semibold bg-gold-500 hover:bg-gold-600 text-navy-900 px-5 py-2 rounded transition-colors"
              >
                Go to app
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="text-sm font-semibold bg-gold-500 hover:bg-gold-600 text-navy-900 px-5 py-2 rounded transition-colors"
                >
                  Get started free
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-white/70 hover:text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1.5" />
            <span className="block w-5 h-0.5 bg-current mb-1.5" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-navy-800 bg-navy-900 px-6 pb-5 pt-3 flex flex-col gap-1">
            {landingNavItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                    isActive ? 'text-gold-400' : 'text-white/80 hover:text-white hover:bg-navy-800'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-3 flex flex-col gap-2 border-t border-navy-800 mt-2">
              {isAuthenticated ? (
                <Link
                  to="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold bg-gold-500 text-navy-900 text-center py-2.5 rounded"
                >
                  Go to app
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-center py-2.5 text-white/80"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-semibold bg-gold-500 text-navy-900 text-center py-2.5 rounded"
                  >
                    Get started free
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* ── Page content ── */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer className="bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="text-base font-bold text-white mb-1 font-serif">UMET</p>
            <p className="text-xs text-white/50 leading-relaxed">
              Ultimate Move Expense Tracker — take control of your finances, wherever life takes you.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-500 mb-3">Product</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-500 mb-3">Company</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-500 mb-3">Account</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/login" className="hover:text-white transition-colors">Sign in</Link></li>
              <li><Link to="/register" className="hover:text-white transition-colors">Create account</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-800 py-4 text-center text-xs text-white/30">
          © {new Date().getFullYear()} UMET · All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingLayout;
