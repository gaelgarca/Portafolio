import React from 'react';

export interface NavItemProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  href,
  label,
  isActive = false,
  onClick,
  className = '',
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'true' : undefined}
      className={`group relative px-3 py-2.5 text-sm font-bold transition-colors select-none focus-visible:outline-2 focus-visible:outline-offset-2 ${
        isActive
          ? 'text-brand-textLight dark:text-brand-textDark font-extrabold'
          : 'text-brand-mutedLight dark:text-brand-mutedDark hover:text-brand-textLight dark:hover:text-brand-textDark'
      } ${className}`.trim()}
    >
      {label}
      <span
        aria-hidden="true"
        className={`absolute bottom-1 left-3 right-3 h-[2px] bg-brand-signal dark:bg-brand-signalDark origin-left transition-transform duration-200 ease-out ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />
    </a>
  );
};
