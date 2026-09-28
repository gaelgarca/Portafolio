import React from 'react';
import { Icon } from '../atoms/Icon';
import { Badge } from '../atoms/Badge';

export interface SkillGroupProps {
  title: string;
  iconName: string;
  tags: string[];
  className?: string;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({
  title,
  iconName,
  tags,
  className = '',
}) => {
  return (
    <article
      className={`p-6 sm:p-7 rounded-[18px] border border-brand-lineLight dark:border-brand-lineDark bg-brand-surfaceLight dark:bg-brand-surfaceDark shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`.trim()}
    >
      <div className="flex items-center gap-3.5">
        <span
          className="w-11 h-11 grid place-items-center rounded-xl text-brand-primary dark:text-brand-signalDark bg-brand-signalSoft dark:bg-brand-signalSoftDark"
          aria-hidden="true"
        >
          <Icon name={iconName} className="w-5 h-5 text-current" />
        </span>
        <h3 className="text-xl font-display font-bold text-brand-textLight dark:text-brand-textDark">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2.5 mt-5.5">
        {tags.map((tag, idx) => (
          <Badge key={`${tag}-${idx}`} variant="tag">
            {tag}
          </Badge>
        ))}
      </div>
    </article>
  );
};
