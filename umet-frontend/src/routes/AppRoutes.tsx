import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import Loader from '@/components/common/Loader';
import LandingLayout from '@/components/layout/LandingLayout';
import { useAuth } from '@/hooks/useAuth';

// Lazy-loaded pages — each page becomes its own JS chunk, so the browser
// only downloads and parses what it actually needs for the current route.
const Login          = lazy(() => import('@/pages/auth/Login'));
const Register       = lazy(() => import('@/pages/auth/Register'));
const ForgotPassword = lazy(() => import('@/pages/auth/ForgotPassword'));
const Dashboard      = lazy(() => import('@/pages/dashboard/Dashboard'));
const Expenses       = lazy(() => import('@/pages/expenses/Expenses'));
const ExpenseDetails = lazy(() => import('@/pages/expenses/ExpenseDetails'));
const Income         = lazy(() => import('@/pages/income/Income'));
const Budgets        = lazy(() => import('@/pages/budgets/Budgets'));
const Analytics      = lazy(() => import('@/pages/analytics/Analytics'));
const Profile        = lazy(() => import('@/pages/profile/Profile'));
const Categories     = lazy(() => import('@/pages/categories/Categories'));
const NotFound       = lazy(() => import('@/pages/NotFound'));

// Landing pages — always publicly accessible, no auth required
const Home     = lazy(() => import('@/pages/landing/Home'));
const Features = lazy(() => import('@/pages/landing/Features'));
const Pricing  = lazy(() => import('@/pages/landing/Pricing'));
const About    = lazy(() => import('@/pages/landing/About'));

/** Sends unauthenticated visitors to /home; authenticated ones to /dashboard. */
const RootRedirect: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <Loader fullPage />;
  return <Navigate to={isAuthenticated ? '/dashboard' : '/home'} replace />;
};

const AppRoutes: React.FC = () => (
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <Suspense fallback={<Loader fullPage />}>
      <Routes>
        {/* ── Root redirect ── */}
        <Route path="/" element={<RootRedirect />} />

        {/* ── Public landing pages — no auth required ── */}
        <Route element={<LandingLayout />}>
          <Route path="/home"     element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing"  element={<Pricing />} />
          <Route path="/about"    element={<About />} />
        </Route>

        {/* ── Auth routes — redirect to /dashboard if already authenticated ── */}
        <Route element={<PublicRoute />}>
          <Route path="/login"           element={<Login />} />
          <Route path="/register"        element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* ── App routes — redirect to /login if not authenticated ── */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard"      element={<Dashboard />} />
          <Route path="/expenses"       element={<Expenses />} />
          <Route path="/expenses/:id"   element={<ExpenseDetails />} />
          <Route path="/income"         element={<Income />} />
          <Route path="/budgets"        element={<Budgets />} />
          <Route path="/categories"     element={<Categories />} />
          <Route path="/analytics"      element={<Analytics />} />
          <Route path="/profile"        element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default AppRoutes;
