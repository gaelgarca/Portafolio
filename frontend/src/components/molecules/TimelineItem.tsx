import React from 'react';
import { Badge } from '../atoms/Badge';

export interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  company,
  role,
  period,
  highlights,
  className = '',
}) => {
  return (
    <article
      className={`relative p-7 sm:p-10 rounded-[22px] border border-brand-lineLight dark:border-brand-lineDark bg-brand-surfaceLight dark:bg-brand-surfaceDark shadow-portfolio-light dark:shadow-portfolio-dark transition-all duration-200 ${className}`.trim()}
    >
      {/* Node bullet connecting to the vertical timeline line */}
      <span
        aria-hidden="true"
        className="hidden sm:block absolute top-9 -left-11 w-3.5 h-3.5 rounded-full bg-brand-signal dark:bg-brand-signalDark border-4 border-brand-bgLight dark:border-brand-bgDark shadow-[0_0_0_1px_rgba(0,168,160,0.8)]"
      />

      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-textLight dark:text-brand-textDark tracking-tight">
            {company}
          </h3>
          <p className="mt-2 text-brand-primary dark:text-brand-primaryDark font-extrabold text-base">
            {role}
          </p>
        </div>
        <div className="self-start sm:self-auto shrink-0">
          <Badge variant="date">{period}</Badge>
        </div>
      </div>

      <ul className="mt-7 list-none p-0 grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-3.5">
        {highlights.map((item, idx) => (
          <li
            key={idx}
            className="relative pl-5 text-brand-mutedLight dark:text-brand-mutedDark text-sm sm:text-base leading-relaxed"
          >
            <span
              aria-hidden="true"
              className="absolute top-2.5 left-0 w-2 h-0.5 bg-brand-signal dark:bg-brand-signalDark rounded-full"
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};
