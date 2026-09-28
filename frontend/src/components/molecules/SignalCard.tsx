import React from 'react';

export interface SignalCardProps {
  label: string;
  value: string;
  isLast?: boolean;
  className?: string;
}

export const SignalCard: React.FC<SignalCardProps> = ({
  label,
  value,
  isLast = false,
  className = '',
}) => {
  return (
    <div
      className={`min-h-[100px] md:min-h-[118px] py-5 px-4 md:px-8 grid content-center border-brand-lineLight dark:border-brand-lineDark ${
        !isLast ? 'border-b sm:border-b-0 sm:border-r' : ''
      } ${className}`.trim()}
    >
      <span className="text-brand-mutedLight dark:text-brand-mutedDark font-mono text-[0.73rem] uppercase tracking-wider font-semibold">
        {label}
      </span>
      <strong className="mt-1.5 font-display text-base md:text-xl font-bold leading-snug text-brand-textLight dark:text-brand-textDark">
        {value}
      </strong>
    </div>
  );
};
