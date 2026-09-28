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

        {/* Right Column: Portrait & Live Status Card */}
        <div className="relative pt-4 pr-4 sm:pt-5 sm:pr-5 max-w-[420px] mx-auto w-full lg:max-w-none before:content-[''] before:absolute before:-z-10 before:top-0 before:right-0 before:w-[68%] before:h-[64%] before:border-t-2 before:border-r-2 before:border-brand-signal dark:before:border-brand-signalDark before:rounded-tr-[32px]">
          <div className="relative aspect-[4/5] overflow-hidden border border-brand-lineLight dark:border-brand-lineDark rounded-[32px_32px_110px_32px] bg-brand-surfaceSoftLight dark:bg-brand-surfaceSoftDark shadow-portfolio-light dark:shadow-portfolio-dark">
            <img
              src={profile.avatarUrl}
              alt={`Retrato profesional de ${profile.name} ${profile.paternalSurname}`}
              width={392}
              height={523}
              loading="eager"
              className="w-full h-full object-cover saturate-[0.9] contrast-[1.03] transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="absolute -right-2 sm:-right-4 bottom-6 sm:bottom-8 w-[min(260px,85%)] p-4 sm:p-5 rounded-2xl border border-brand-lineLight dark:border-brand-lineDark bg-brand-surfaceLight dark:bg-brand-surfaceDark shadow-portfolio-light dark:shadow-portfolio-dark">
            <Badge variant="status">Perfil actual</Badge>
            <strong className="block mt-1.5 text-xs sm:text-sm font-bold text-brand-textLight dark:text-brand-textDark leading-snug">
              {profile.currentStatus}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};
