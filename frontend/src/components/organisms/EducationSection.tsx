import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Kicker } from '../atoms/Kicker';
import { Badge } from '../atoms/Badge';
import type { EducationItem, LanguageItem } from '../../types/cv.types';

export interface EducationSectionProps {
  education: EducationItem;
  language: LanguageItem;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  language,
}) => {
  return (
    <section
      id="formacion"
      aria-labelledby="formacion-title"
      className="py-16 sm:py-24 md:py-28"
    >
      <div className="max-w-[1120px] w-[calc(100%-40px)] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-[0.65fr_1.35fr] gap-6 md:gap-10 mb-12 sm:mb-14 md:items-end">
          <div>
            <Kicker>04 / Formación</Kicker>
            <h2
              id="formacion-title"
              className="mt-2.5 font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-brand-textLight dark:text-brand-textDark"
            >
              Aprendizaje en progreso
            </h2>
          </div>
          <p className="text-brand-mutedLight dark:text-brand-mutedDark text-base sm:text-lg max-w-[630px] leading-relaxed">
            Una base académica en sistemas y una capacidad de comunicación que amplía el alcance profesional.
          </p>
        </div>

        {/* Education & Language Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-5">
          {/* Academic Card */}
          <article className="p-7 sm:p-10 md:p-12 rounded-[22px] border border-brand-lineLight dark:border-brand-lineDark bg-brand-surfaceLight dark:bg-brand-surfaceDark shadow-portfolio-light dark:shadow-portfolio-dark flex flex-col justify-between">
            <div>
              <span className="text-brand-signal dark:text-brand-signalDark font-mono text-xs font-bold uppercase tracking-wider">
                Formación académica
              </span>
              <h3 className="mt-3.5 mb-2.5 font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-textLight dark:text-brand-textDark tracking-tight">
                {education.degree}
              </h3>
              <p className="text-brand-mutedLight dark:text-brand-mutedDark text-base sm:text-lg">
                {education.institution}
              </p>
            </div>
            <div className="mt-7">
              <Badge variant="study" icon={<GraduationCap className="w-5 h-5 text-current" />}>
                {education.status}
              </Badge>
            </div>
          </article>

          {/* Language Card */}
          <article className="p-7 sm:p-10 md:p-12 rounded-[22px] border border-brand-lineLight dark:border-brand-lineDark bg-brand-surfaceLight dark:bg-brand-surfaceDark shadow-portfolio-light dark:shadow-portfolio-dark flex flex-col justify-between">
            <div>
              <span className="text-brand-signal dark:text-brand-signalDark font-mono text-xs font-bold uppercase tracking-wider">
                Idioma
              </span>
              <h3 className="mt-3.5 mb-2.5 font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-brand-textLight dark:text-brand-textDark tracking-tight">
                {language.name}
              </h3>
              <p className="text-brand-mutedLight dark:text-brand-mutedDark text-base sm:text-lg">
                {language.description}
              </p>
            </div>

            <div className="mt-7 pt-6 border-t border-brand-lineLight dark:border-brand-lineDark">
              <strong className="block font-display text-xl sm:text-2xl font-bold text-brand-textLight dark:text-brand-textDark">
                {language.level}
              </strong>
              <span className="mt-1 block text-brand-mutedLight dark:text-brand-mutedDark text-sm sm:text-base">
                {language.capabilities}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
