/**
 * Format an ISO date string to a human-readable date (e.g. "Jan 15, 2025").
 */
export const formatDate = (
  dateStr: string,
  locale = 'en-US',
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' },
): string => {
  return new Date(dateStr).toLocaleDateString(locale, options);
};

/**
 * Return a "YYYY-MM" string from a year and month number.
 */
export const toYearMonth = (year: number, month: number): string => {
  return `${year}-${String(month).padStart(2, '0')}`;
};
