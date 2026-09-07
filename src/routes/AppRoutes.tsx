import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import Loader from '@/components/common/Loader';

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

const AppRoutes: React.FC = () => (
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <Suspense fallback={<Loader fullPage />}>
      <Routes>
        {/* Public routes — redirect to /dashboard if already authenticated */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Protected routes — redirect to /login if not authenticated */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/expenses/:id" element={<ExpenseDetails />} />
          <Route path="/income" element={<Income />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default AppRoutes;
