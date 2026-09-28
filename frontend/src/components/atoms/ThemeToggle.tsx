import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export interface ThemeToggleProps {
  className?: string;
  theme?: 'light' | 'dark';
  onToggle?: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  theme: propTheme,
  onToggle: propOnToggle,
}) => {
  const hookTheme = useTheme();
  const isDark = propTheme ? propTheme === 'dark' : hookTheme.isDark;
  const toggle = propOnToggle || hookTheme.toggleTheme;

  const label = isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`w-11 h-11 min-w-[44px] min-h-[44px] inline-grid place-items-center rounded-xl border border-brand-lineLight dark:border-brand-lineDark bg-brand-surfaceLight dark:bg-brand-surfaceDark text-brand-textLight dark:text-brand-textDark hover:border-brand-signal dark:hover:border-brand-signalDark hover:text-brand-signal dark:hover:text-brand-signalDark transition-all duration-200 cursor-pointer shadow-sm active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`.trim()}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-brand-signalDark animate-in fade-in zoom-in duration-200" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5 text-brand-textLight hover:text-brand-signal transition-colors animate-in fade-in zoom-in duration-200" aria-hidden="true" />
      )}
    </button>
  );
};
