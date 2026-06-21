export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'introduce-theme';

export function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return 'light';
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
  window.localStorage.setItem(STORAGE_KEY, theme);
}

export function withBase(path: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (path.startsWith('/')) return `${base}${path}`;
  return `${base}/${path}`;
}
