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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-xl font-semibold text-gray-900">Sign in</h1>
          <p className="mt-1 text-sm text-gray-500">Welcome back to UMET</p>
        </div>
        <div className="card">
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
            <Button type="submit" isLoading={isLoading} className="w-full">
              Sign In
            </Button>
          </form>
          <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col gap-2 text-sm text-center text-gray-500">
            <Link to="/forgot-password" className="hover:text-gray-800">
              Forgot your password?
            </Link>
            <span>
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline font-medium">
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
