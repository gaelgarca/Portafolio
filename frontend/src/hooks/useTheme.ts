import { useState, useEffect, useCallback } from 'react';

export type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const isManuallySet = localStorage.getItem('portfolio-theme-manual') === 'true';
    if (isManuallySet) {
      const saved = localStorage.getItem('portfolio-theme') as Theme | null;
      if (saved === 'dark' || saved === 'light') return saved;
    }
    // Tema light por defecto absoluto
    return 'light';
  });

  const applyTheme = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    root.setAttribute('data-theme', newTheme);
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  const setTheme = useCallback((newTheme: Theme, isManual = true) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
    if (isManual) {
      localStorage.setItem('portfolio-theme-manual', 'true');
      localStorage.setItem('portfolio-theme', newTheme);
    }
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next, true);
  }, [theme, setTheme]);

  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  return { theme, toggleTheme, setTheme, isDark: theme === 'dark' };
};
