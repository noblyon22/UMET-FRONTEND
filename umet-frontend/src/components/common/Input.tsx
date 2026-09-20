import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input: React.FC<InputProps> = ({ label, error, helperText, id, className = '', ...rest }) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-navy-900">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`block w-full rounded border px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 ${
          error ? 'border-red-500' : 'border-gold-200'
        } ${className}`}
        {...rest}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
      {!error && helperText && <p className="text-xs text-gray-500">{helperText}</p>}
    </div>
  );
};

export default Input;
