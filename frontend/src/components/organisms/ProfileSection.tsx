import React from 'react';
import { Kicker } from '../atoms/Kicker';
import type { ProfileInfo, ContactInfo } from '../../types/cv.types';

export interface ProfileSectionProps {
  profile: ProfileInfo;
  contact: ContactInfo;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ profile, contact }) => {
  return (
    <section
      id="perfil"
      aria-labelledby="perfil-title"
      className="py-16 sm:py-24 md:py-28"
    >
      <div className="max-w-[1120px] w-[calc(100%-40px)] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-[0.65fr_1.35fr] gap-6 md:gap-10 mb-12 sm:mb-14 md:items-end">
          <div>
            <Kicker>01 / Perfil</Kicker>
            <h2
              id="perfil-title"
              className="mt-2.5 font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-brand-textLight dark:text-brand-textDark"
            >
              Tecnología con sentido práctico
            </h2>
          </div>
          <p className="text-brand-mutedLight dark:text-brand-mutedDark text-base sm:text-lg max-w-[630px] leading-relaxed">
            Mi formación en sistemas se complementa con experiencia diaria en organización, seguimiento y comunicación con clientes.
          </p>
        </div>

        {/* Profile Card */}
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] border border-brand-lineLight dark:border-brand-lineDark rounded-[22px] overflow-hidden bg-brand-surfaceLight dark:bg-brand-surfaceDark shadow-portfolio-light dark:shadow-portfolio-dark">
          <div className="p-8 sm:p-12 md:p-14 text-brand-signal dark:text-brand-signalDark bg-[#0b1220] dark:bg-[#050b12] font-mono flex flex-col justify-between">
            <strong className="block text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter select-none">
              01
            </strong>
            <span className="block mt-4 text-[#c6d1dc] text-xs uppercase tracking-widest font-semibold">
              {contact.location || 'Aguascalientes, Ags.'}
            </span>
          </div>
          <div className="p-8 sm:p-12 md:p-14 flex items-center">
            <p className="m-0 text-base sm:text-lg md:text-xl leading-relaxed text-brand-textLight dark:text-brand-textDark">
              {profile.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
