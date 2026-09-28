import { useState, useEffect, useCallback } from 'react';
import type { CVData } from '../types/cv.types';
import { cvService } from '../services/cvService';
import { fallbackCVData } from '../data/cvFallback';

export interface UseCVReturn {
  data: CVData;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useCV = (): UseCVReturn => {
  const [data, setData] = useState<CVData>(fallbackCVData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const cv = await cvService.getFullCV();
      setData(cv);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al cargar los datos del CV';
      setError(message);
      setData(fallbackCVData);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let isCancelled = false;

    cvService
      .getFullCV()
      .then((cv) => {
        if (!isCancelled) {
          setData(cv);
          setLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (!isCancelled) {
          const message = err instanceof Error ? err.message : 'Error al cargar los datos del CV';
          setError(message);
          setData(fallbackCVData);
          setLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return { data, loading, error, refetch };
};
