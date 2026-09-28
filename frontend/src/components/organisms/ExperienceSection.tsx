import React from 'react';
import { Kicker } from '../atoms/Kicker';
import type { ExperienceItem as ExperienceItemType } from '../../types/cv.types';
import { TimelineItem } from '../molecules/TimelineItem';

export interface ExperienceSectionProps {
  experience: ExperienceItemType[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-title"
      className="py-16 sm:py-24 md:py-28"
    >
      <div className="max-w-[1120px] w-[calc(100%-40px)] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-[0.65fr_1.35fr] gap-6 md:gap-10 mb-12 sm:mb-14 md:items-end">
          <div>
            <Kicker>02 / Experiencia</Kicker>
            <h2
              id="experiencia-title"
              className="mt-2.5 font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-brand-textLight dark:text-brand-textDark"
            >
              Trabajo que conecta personas e información
            </h2>
          </div>
          <p className="text-brand-mutedLight dark:text-brand-mutedDark text-base sm:text-lg max-w-[630px] leading-relaxed">
            Una experiencia enfocada en mantener procesos claros, dar seguimiento oportuno y apoyar la operación cotidiana.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative grid gap-8 sm:pl-12 before:content-[''] before:hidden sm:before:block before:absolute before:top-4 before:bottom-4 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-brand-signal before:to-brand-primary dark:before:from-brand-signalDark dark:before:to-brand-primaryDark">
          {experience.map((item) => (
            <TimelineItem
              key={item.id}
              company={item.company}
              role={item.role}
              period={item.period}
              highlights={item.highlights}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
