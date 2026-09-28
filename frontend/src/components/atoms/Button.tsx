import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'contact-primary' | 'contact-secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  download?: boolean | string;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  className?: string;
  target?: string;
  rel?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  download,
  onClick,
  children,
  icon,
  iconPosition = 'left',
  type = 'button',
  ariaLabel,
  className = '',
  target,
  rel,
  fullWidth = false,
}) => {
  const baseClasses =
    'min-h-[48px] inline-flex items-center justify-center gap-2.5 rounded-xl font-bold transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2';

  const sizeClasses = {
    sm: 'px-3.5 py-2 text-xs md:text-sm',
    md: 'px-4.5 py-3 text-sm md:text-base',
    lg: 'px-6 py-3.5 text-base md:text-lg',
  }[size];

  const variantClasses = {
    primary:
      'bg-brand-primaryStrong text-white shadow-md shadow-brand-primary/20 hover:-translate-y-0.5 hover:shadow-lg dark:bg-brand-signalDark dark:text-brand-bgDark dark:hover:bg-brand-signal',
    secondary:
      'border border-brand-lineLight bg-brand-surfaceLight text-brand-textLight hover:border-brand-signal hover:-translate-y-0.5 hover:shadow-sm dark:border-brand-lineDark dark:bg-brand-surfaceDark dark:text-brand-textDark dark:hover:border-brand-signalDark',
    'contact-primary':
      'bg-brand-signalDark text-brand-bgDark font-extrabold hover:bg-brand-signal hover:text-white hover:-translate-y-0.5 shadow-md',
    'contact-secondary':
      'border border-[#415269] text-[#f7fbff] bg-transparent hover:border-brand-signalDark hover:-translate-y-0.5',
    ghost:
      'text-brand-mutedLight hover:text-brand-textLight dark:text-brand-mutedDark dark:hover:text-brand-textDark hover:bg-black/5 dark:hover:bg-white/5',
  }[variant];

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${widthClass} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0" aria-hidden="true">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={combinedClasses}
        aria-label={ariaLabel}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
