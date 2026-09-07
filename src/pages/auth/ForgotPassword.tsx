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
    // Placeholder — wire up to backend reset endpoint when available
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="card w-full max-w-sm text-center">
          <p className="text-green-600 font-medium mb-2">Check your email</p>
          <p className="text-sm text-gray-500">
            If <strong>{email}</strong> is registered, a reset link has been sent.
          </p>
          <Link to="/login" className="mt-4 block text-sm text-blue-600 hover:underline">
            Back to sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="card w-full max-w-sm">
        <h1 className="text-xl font-bold text-gray-900 mb-2">Forgot password</h1>
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
          <Button type="submit" isLoading={isLoading} className="w-full">
            Send Reset Link
          </Button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500">
          Remembered it?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
