import React from 'react';
import type { CVData } from '../../types/cv.types';
import { Navbar } from '../organisms/Navbar';
import { HeroSection } from '../organisms/HeroSection';
import { SignalStrip } from '../organisms/SignalStrip';
import { ProfileSection } from '../organisms/ProfileSection';
import { ExperienceSection } from '../organisms/ExperienceSection';
import { SkillsSection } from '../organisms/SkillsSection';
import { EducationSection } from '../organisms/EducationSection';
import { ContactSection } from '../organisms/ContactSection';
import { Footer } from '../organisms/Footer';

export interface PortfolioTemplateProps {
  data: CVData;
  activeSection: string;
  loading?: boolean;
}

export const PortfolioTemplate: React.FC<PortfolioTemplateProps> = ({
  data,
  activeSection,
}) => {
  const fullName = `${data.profile.name} ${data.profile.paternalSurname} ${data.profile.maternalSurname}`;

  return (
    <div className="min-h-screen flex flex-col bg-brand-bgLight text-brand-textLight dark:bg-brand-bgDark dark:text-brand-textDark transition-colors duration-200">
      {/* Skip to main content accessibility link */}
      <a
        href="#contenido"
        className="fixed top-3 left-3 -translate-y-48 focus:translate-y-0 z-[1000] px-4 py-2.5 rounded-xl text-white bg-[#0b1220] border border-brand-signal font-mono text-sm font-bold shadow-2xl transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Saltar al contenido
      </a>

      {/* Sticky Header with Navigation */}
      <Navbar activeSection={activeSection} name={`${data.profile.name} ${data.profile.paternalSurname}`} />

      {/* Main Content Sections */}
      <main id="contenido" tabIndex={-1} className="flex-1 focus:outline-none">
        <HeroSection profile={data.profile} contact={data.contact} />
        <SignalStrip signals={data.signals} />
        <ProfileSection profile={data.profile} contact={data.contact} />
        <ExperienceSection experience={data.experience} />
        <SkillsSection skills={data.skills} />
        <EducationSection education={data.education} language={data.language} />
        <ContactSection contact={data.contact} />
      </main>

      {/* Footer */}
      <Footer name={fullName} location={data.contact.location} />
    </div>
  );
};
