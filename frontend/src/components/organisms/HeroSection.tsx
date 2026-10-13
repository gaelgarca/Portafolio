import React from 'react';
import { Mail, Download } from 'lucide-react';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import type { ProfileInfo, ContactInfo } from '../../types/cv.types';

export interface HeroSectionProps {
  profile: ProfileInfo;
  contact: ContactInfo;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, contact }) => {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="pt-12 sm:pt-16 md:pt-24 pb-14 overflow-hidden"
    >
      <div className="max-w-[1120px] w-[calc(100%-40px)] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)] gap-10 lg:gap-16 items-center">
        {/* Left Column: Hero Copy */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2.5 text-brand-primary dark:text-brand-primaryDark font-mono uppercase text-xs font-bold tracking-[0.13em] before:content-[''] before:w-[34px] before:h-[2px] before:bg-brand-signal dark:before:bg-brand-signalDark">
            Portafolio profesional
          </div>

          <h1
            id="hero-title"
            className="mt-5 mb-5 font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] tracking-tight leading-[1.05] text-brand-textLight dark:text-brand-textDark"
          >
            {profile.name}{' '}
            <span className="block text-brand-primary dark:text-brand-primaryDark">
              {profile.paternalSurname} {profile.maternalSurname}
            </span>
          </h1>

          <p className="text-brand-mutedLight dark:text-brand-mutedDark text-lg sm:text-xl leading-relaxed max-w-[670px]">
            {profile.lead || profile.bio}
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
            <Button
              variant="primary"
              size="md"
              href={`mailto:${contact.email}`}
              icon={<Mail className="w-5 h-5" />}
              ariaLabel="Enviar correo a Álvaro Gael para contactar"
            >
              Hablemos sobre una oportunidad
            </Button>
            <Button
              variant="secondary"
              size="md"
              href={contact.cvPdfUrl}
              download="Curriculum-Gael-Garcia.pdf"
              icon={<Download className="w-5 h-5" />}
              ariaLabel="Descargar currículum en formato PDF"
            >
              Descargar currículum
            </Button>
          </div>
        </div>

        {/* Right Column: Professional status card */}
        <div className="relative max-w-[420px] mx-auto w-full lg:max-w-none">
          <div className="relative min-h-[260px] sm:min-h-[300px] overflow-hidden flex flex-col justify-between p-7 sm:p-9 rounded-[32px_32px_110px_32px] border border-brand-lineLight dark:border-brand-lineDark bg-brand-surfaceLight dark:bg-brand-surfaceDark shadow-portfolio-light dark:shadow-portfolio-dark">
            <div aria-hidden="true" className="absolute -right-10 -top-12 w-56 h-56 rounded-full border border-brand-signal/25 dark:border-brand-signalDark/25" />
            <div aria-hidden="true" className="absolute -right-1 -top-3 w-40 h-40 rounded-full border border-brand-signal/20 dark:border-brand-signalDark/20" />
            <Badge variant="status">Perfil actual</Badge>
            <div className="relative mt-14">
              <span className="block mb-3 text-brand-mutedLight dark:text-brand-mutedDark font-mono text-xs uppercase tracking-[0.16em]">
                Enfoque profesional
              </span>
              <strong className="block max-w-[340px] text-2xl sm:text-3xl font-bold leading-tight text-brand-textLight dark:text-brand-textDark">
                {profile.currentStatus}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

