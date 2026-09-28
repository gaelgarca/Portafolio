import React from 'react';
import { Kicker } from '../atoms/Kicker';
import type { SkillCategory } from '../../types/cv.types';
import { SkillGroup } from '../molecules/SkillGroup';

export interface SkillsSectionProps {
  skills: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section
      id="habilidades"
      aria-labelledby="habilidades-title"
      className="py-16 sm:py-24 md:py-28"
    >
      <div className="max-w-[1120px] w-[calc(100%-40px)] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-[0.65fr_1.35fr] gap-6 md:gap-10 mb-12 sm:mb-14 md:items-end">
          <div>
            <Kicker>03 / Habilidades</Kicker>
            <h2
              id="habilidades-title"
              className="mt-2.5 font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-brand-textLight dark:text-brand-textDark"
            >
              Capacidades para aportar desde el primer día
            </h2>
          </div>
          <p className="text-brand-mutedLight dark:text-brand-mutedDark text-base sm:text-lg max-w-[630px] leading-relaxed">
            Herramientas y competencias organizadas por el tipo de valor que aportan, sin niveles subjetivos ni porcentajes.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 sm:gap-5">
          {skills.map((skill) => (
            <SkillGroup
              key={skill.id}
              title={skill.title}
              iconName={skill.iconName}
              tags={skill.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
