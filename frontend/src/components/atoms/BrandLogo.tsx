import React from 'react';

export interface BrandLogoProps {
  href?: string;
  name?: string;
  shortMark?: string;
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  href = '#inicio',
  name = 'Álvaro Gael García',
  shortMark = 'AG',
  className = '',
  onClick,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={`Ir al inicio - ${name}`}
      className={`group inline-flex items-center gap-3 no-underline select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-focusLight dark:focus-visible:outline-brand-focusDark ${className}`.trim()}
    >
      <span
        aria-hidden="true"
        className="w-[38px] h-[38px] grid place-items-center border border-brand-lineLight dark:border-brand-lineDark rounded-[11px] text-brand-signal dark:text-brand-signalDark bg-brand-surfaceLight dark:bg-brand-surfaceDark font-mono text-xs font-bold shadow-sm group-hover:border-brand-signal dark:group-hover:border-brand-signalDark transition-colors"
      >
        {shortMark}
      </span>
      <span className="font-display font-extrabold tracking-tight text-base md:text-lg text-brand-textLight dark:text-brand-textDark group-hover:text-brand-primary dark:group-hover:text-brand-signalDark transition-colors hidden sm:inline-block">
        {name}
      </span>
    </a>
  );
};
