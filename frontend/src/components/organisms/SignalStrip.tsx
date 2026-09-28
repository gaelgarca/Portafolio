import React from 'react';
import type { SignalMetric } from '../../types/cv.types';
import { SignalCard } from '../molecules/SignalCard';

export interface SignalStripProps {
  signals: SignalMetric[];
}

export const SignalStrip: React.FC<SignalStripProps> = ({ signals }) => {
  return (
    <aside
      className="w-full border-y border-brand-lineLight dark:border-brand-lineDark bg-brand-surfaceLight dark:bg-brand-surfaceDark transition-colors duration-200"
      aria-label="Resumen profesional de métricas clave"
    >
      <div className="max-w-[1120px] w-[calc(100%-40px)] mx-auto grid grid-cols-1 sm:grid-cols-3">
        {signals.map((signal, index) => (
          <SignalCard
            key={signal.id || index}
            label={signal.label}
            value={signal.value}
            isLast={index === signals.length - 1}
          />
        ))}
      </div>
    </aside>
  );
};
