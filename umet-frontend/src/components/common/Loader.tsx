import React from 'react';

interface LoaderProps {
  fullPage?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = { sm: 'h-5 w-5', md: 'h-8 w-8', lg: 'h-12 w-12' };

const Loader: React.FC<LoaderProps> = ({ fullPage = false, size = 'md' }) => {
  const spinner = (
    <div
      className={`animate-spin rounded-full border-4 border-blue-600 border-t-transparent ${sizeMap[size]}`}
      role="status"
      aria-label="Loading"
    />
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
        {spinner}
      </div>
    );
  }

  return <div className="flex items-center justify-center p-6">{spinner}</div>;
};

export default Loader;
