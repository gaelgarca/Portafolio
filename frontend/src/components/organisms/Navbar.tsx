import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from '../atoms/BrandLogo';
import { ThemeToggle } from '../atoms/ThemeToggle';
import { NavItem } from '../molecules/NavItem';

export interface NavbarProps {
  activeSection?: string;
  name?: string;
}

const NAV_ITEMS = [
  { href: '#perfil', label: 'Perfil', id: 'perfil' },
  { href: '#experiencia', label: 'Experiencia', id: 'experiencia' },
  { href: '#habilidades', label: 'Habilidades', id: 'habilidades' },
  { href: '#formacion', label: 'Formación', id: 'formacion' },
  { href: '#contacto', label: 'Contacto', id: 'contacto' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection = '',
  name = 'Álvaro Gael García',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-lineLight dark:border-brand-lineDark bg-brand-surfaceLight/90 dark:bg-brand-surfaceDark/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-[1120px] w-[calc(100%-40px)] mx-auto min-h-[72px] flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <BrandLogo href="#inicio" name={name} onClick={closeMenu} />

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 ml-auto"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.id}
              href={item.href}
              label={item.label}
              isActive={activeSection === item.id}
            />
          ))}
        </nav>

        {/* Actions: Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden w-11 h-11 min-w-[44px] min-h-[44px] inline-grid place-items-center rounded-xl border border-brand-lineLight dark:border-brand-lineDark bg-brand-surfaceLight dark:bg-brand-surfaceDark text-brand-textLight dark:text-brand-textDark hover:border-brand-signal hover:text-brand-signal dark:hover:border-brand-signalDark dark:hover:text-brand-signalDark transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-b border-brand-lineLight dark:border-brand-lineDark bg-brand-surfaceLight dark:bg-brand-surfaceDark px-6 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                aria-current={activeSection === item.id ? 'true' : undefined}
                className={`py-3 px-3 rounded-lg text-base font-bold transition-colors ${
                  activeSection === item.id
                    ? 'text-brand-signal dark:text-brand-signalDark bg-brand-surfaceSoftLight dark:bg-brand-surfaceSoftDark'
                    : 'text-brand-mutedLight dark:text-brand-mutedDark hover:text-brand-textLight dark:hover:text-brand-textDark'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
