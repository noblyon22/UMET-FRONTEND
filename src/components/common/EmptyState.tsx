import React from 'react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No results found',
  description = 'There is nothing here yet.',
  action,
}) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="mb-4 text-gray-300">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    </div>
    <h3 className="text-base font-semibold text-gray-700">{title}</h3>
    {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
    {action && <div className="mt-4">{action}</div>}
  </div>
);

export default EmptyState;
