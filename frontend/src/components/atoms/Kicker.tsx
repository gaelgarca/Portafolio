import React from 'react';

export interface KickerProps {
  children: React.ReactNode;
  variant?: 'primary' | 'signal' | 'inverted';
  className?: string;
}

export const Kicker: React.FC<KickerProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const variantClasses = {
    primary: 'text-brand-primary dark:text-brand-primaryDark',
    signal: 'text-brand-signal dark:text-brand-signalDark',
    inverted: 'text-brand-signalDark',
  }[variant];

  return (
    <span
      className={`font-mono uppercase text-xs font-bold tracking-[0.13em] select-none ${variantClasses} ${className}`.trim()}
    >
      {children}
    </span>
  );
};
