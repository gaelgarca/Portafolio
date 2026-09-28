import React from 'react';
import { ArrowUp } from 'lucide-react';

export interface FooterProps {
  name?: string;
  location?: string;
}

export const Footer: React.FC<FooterProps> = ({
  name = 'Álvaro Gael García Ramírez',
  location = 'Aguascalientes, Ags.',
}) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-8 sm:py-10 border-t border-brand-lineLight dark:border-brand-lineDark bg-brand-surfaceLight/50 dark:bg-brand-surfaceDark/50 transition-colors duration-200">
      <div className="max-w-[1120px] w-[calc(100%-40px)] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-brand-mutedLight dark:text-brand-mutedDark text-sm">
        <p className="m-0 text-center sm:text-left">
          © {currentYear} {name} · {location}
        </p>
        <p className="m-0">
          <a
            href="#inicio"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-semibold text-brand-textLight dark:text-brand-textDark hover:text-brand-signal dark:hover:text-brand-signalDark underline underline-offset-4 decoration-brand-signal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span>Volver al inicio</span>
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </a>
        </p>
      </div>
    </footer>
  );
};
