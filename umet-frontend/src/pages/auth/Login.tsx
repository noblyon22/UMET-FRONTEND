import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';
import { isValidEmail, minLength } from '@/utils/validators';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isValidEmail(email)) return setError('Enter a valid email address.');
    if (!minLength(password, 6)) return setError('Password must be at least 6 characters.');

    setIsLoading(true);
    try {
      await signIn({ email, password });
    } catch {
      setError('Invalid email or password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-900 px-4 relative overflow-hidden">
      {/* diagonal gold texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #c9a227 0, #c9a227 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative w-full max-w-sm">
        {/* Logo lockup */}
        <div className="mb-8 text-center">
          <p className="font-serif text-3xl font-bold text-white mb-1">UMET</p>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-400">
            Ultimate Move Expense Tracker
          </p>
          <div className="mt-5">
            <h1 className="text-xl font-semibold text-white">Sign in</h1>
            <p className="mt-1 text-sm text-white/50">Welcome back</p>
          </div>
        </div>

        <div className="bg-white rounded border border-gold-100 p-7 shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button type="submit" isLoading={isLoading} className="w-full mt-1">
              Sign In
            </Button>
          </form>
          <div className="mt-5 pt-4 border-t border-gold-100 flex flex-col gap-2 text-sm text-center text-gray-500">
            <Link to="/forgot-password" className="hover:text-navy-900">
              Forgot your password?
            </Link>
            <span>
              Don't have an account?{' '}
              <Link to="/register" className="text-gold-500 hover:underline font-medium">
                Create one
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
