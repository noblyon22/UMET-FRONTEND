import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50">
    <p className="text-7xl font-bold text-gray-200">404</p>
    <h1 className="mt-4 text-xl font-semibold text-gray-800">Page not found</h1>
    <p className="mt-2 text-sm text-gray-500">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <Link
      to="/dashboard"
      className="mt-6 inline-block text-sm text-blue-600 hover:underline"
    >
      Go to Dashboard
    </Link>
  </div>
);

export default NotFound;
