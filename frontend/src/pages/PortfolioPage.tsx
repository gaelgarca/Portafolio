import React from 'react';
import { useCV } from '../hooks/useCV';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { PortfolioTemplate } from '../components/templates/PortfolioTemplate';

const SECTION_IDS = ['inicio', 'perfil', 'experiencia', 'habilidades', 'formacion', 'contacto'];

export const PortfolioPage: React.FC = () => {
  const { data, loading, error } = useCV();
  const activeSection = useScrollSpy(SECTION_IDS, 160);

  return (
    <>
      {error && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-4 right-4 z-50 p-3 px-4 rounded-xl border border-amber-500/30 bg-amber-500/10 backdrop-blur-md text-xs font-mono text-amber-700 dark:text-amber-300 shadow-lg"
        >
          Modo offline: Mostrando datos locales de respaldo.
        </div>
      )}

      <PortfolioTemplate
        data={data}
        activeSection={activeSection}
        loading={loading}
      />
    </>
  );
};
