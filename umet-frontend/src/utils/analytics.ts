/**
 * Google Analytics 4 events (gtag is loaded in index.html).
 * Safe when GA is blocked or not loaded; GA only sets cookies after the
 * visitor accepts analytics cookies (consent mode, see index.html).
 */
type Gtag = (command: 'event', name: string, params?: Record<string, unknown>) => void;

export function trackEvent(name: string, params?: Record<string, unknown>): void {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== 'function') return;
  try {
    gtag('event', name, params);
  } catch {
    // analytics must never break the app
  }
}
