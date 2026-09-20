import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { isValidEmail } from '@/utils/validators';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!isValidEmail(email)) return setError('Enter a valid email address.');
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-900 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #c9a227 0, #c9a227 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative bg-white border border-gold-100 rounded p-7 w-full max-w-sm text-center shadow-lg">
          <p className="text-green-600 font-semibold mb-2">Check your email</p>
          <p className="text-sm text-gray-500">
            If <strong>{email}</strong> is registered, a reset link has been sent.
          </p>
          <Link to="/login" className="mt-4 block text-sm text-gold-500 hover:underline font-medium">
            Back to sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-900 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #c9a227 0, #c9a227 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative w-full max-w-sm">
        <div className="mb-8 text-center">
          <p className="font-serif text-3xl font-bold text-white mb-1">UMET</p>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-400">
            Ultimate Move Expense Tracker
          </p>
        </div>
        <div className="bg-white border border-gold-100 rounded p-7 shadow-lg">
          <h1 className="font-serif text-xl font-bold text-navy-900 mb-2">Forgot password</h1>
          <p className="text-sm text-gray-500 mb-6">
            Enter your email and we'll send you a reset link.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button type="submit" isLoading={isLoading} className="w-full mt-1">
              Send Reset Link
            </Button>
          </form>
          <p className="mt-5 pt-4 border-t border-gold-100 text-sm text-center text-gray-500">
            Remembered it?{' '}
            <Link to="/login" className="text-gold-500 hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
