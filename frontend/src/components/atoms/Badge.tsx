import React from 'react';

export interface BadgeProps {
  variant?: 'tag' | 'date' | 'study' | 'status' | 'outline';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'tag',
  children,
  icon,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center transition-colors';

  const variantClasses = {
    tag: 'px-2.5 py-1.5 rounded-lg border border-brand-lineLight dark:border-brand-lineDark bg-brand-bgLight dark:bg-brand-bgDark text-brand-mutedLight dark:text-brand-mutedDark text-sm font-medium hover:border-brand-signal/50 dark:hover:border-brand-signalDark/50',
    date: 'px-3 py-1 rounded-full border border-brand-lineLight dark:border-brand-lineDark bg-brand-surfaceSoftLight dark:bg-brand-surfaceSoftDark text-brand-mutedLight dark:text-brand-mutedDark font-mono text-xs tracking-tight',
    study: 'px-3 py-1.5 rounded-lg bg-blue-500/10 text-brand-primary dark:text-brand-primaryDark font-bold text-sm gap-2',
    status: 'font-mono text-xs uppercase tracking-wider text-brand-mutedLight dark:text-brand-mutedDark gap-2.5 font-semibold',
    outline: 'px-2.5 py-1 rounded-md border border-brand-lineLight dark:border-brand-lineDark text-xs font-mono text-brand-mutedLight dark:text-brand-mutedDark',
  }[variant];

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`.trim()}>
      {variant === 'status' && (
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-signal opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-signal shadow-[0_0_0_4px_rgba(0,168,160,0.15)] dark:bg-brand-signalDark"></span>
        </span>
      )}
      {icon && <span className="inline-flex shrink-0" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
