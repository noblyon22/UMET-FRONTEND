export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isRequired = (value: string | number | undefined | null): boolean => {
  if (value === undefined || value === null) return false;
  return String(value).trim().length > 0;
};

export const minLength = (value: string, min: number): boolean => {
  return value.length >= min;
};

export const passwordsMatch = (password: string, confirm: string): boolean => {
  return password === confirm;
};

export const isPositiveNumber = (value: number): boolean => {
  return typeof value === 'number' && value > 0;
};
