import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';
import { isValidEmail, minLength, passwordsMatch } from '@/utils/validators';

const Register: React.FC = () => {
  const { signUp } = useAuth();
  const [form, setForm] = useState({ full_name: '', email: '', password: '', confirm_password: '' });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const set = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.full_name.trim()) return setError('Name is required.');
    if (!isValidEmail(form.email)) return setError('Enter a valid email address.');
    if (!minLength(form.password, 6)) return setError('Password must be at least 6 characters.');
    if (!passwordsMatch(form.password, form.confirm_password)) return setError('Passwords do not match.');

    setIsLoading(true);
    try {
      const { full_name, email, password } = form;
      await signUp({ full_name, email, password });
    } catch (err: any) {
      const detail = err?.response?.data?.detail;
      if (typeof detail === 'string') {
        setError(detail);
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-xl font-semibold text-gray-900">Create an account</h1>
          <p className="mt-1 text-sm text-gray-500">Start tracking your finances</p>
        </div>
        <div className="card">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input label="Full Name" value={form.full_name} onChange={set('full_name')} required />
            <Input label="Email" type="email" value={form.email} onChange={set('email')} required />
            <Input
              label="Password"
              type="password"
              value={form.password}
              onChange={set('password')}
              required
            />
            <Input
              label="Confirm Password"
              type="password"
              value={form.confirm_password}
              onChange={set('confirm_password')}
              required
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button type="submit" isLoading={isLoading} className="w-full">
              Create Account
            </Button>
          </form>
          <p className="mt-5 pt-4 border-t border-gray-100 text-sm text-center text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
