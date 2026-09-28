import { apiClient } from './api';
import type { CVData } from '../types/cv.types';
import { fallbackCVData } from '../data/cvFallback';

interface ApiResponseEnvelope<T> {
  success: boolean;
  data: T;
  timestamp?: string;
  error?: string;
}

export const cvService = {
  getFullCV: async (): Promise<CVData> => {
    try {
      const response = await apiClient.get<CVData | ApiResponseEnvelope<CVData>>('/cv');
      
      if (response.data && typeof response.data === 'object' && 'data' in response.data && (response.data as ApiResponseEnvelope<CVData>).data) {
        return (response.data as ApiResponseEnvelope<CVData>).data;
      }
      
      return response.data as CVData;
    } catch (error) {
      console.warn('Backend API unavailable. Using resilient local CV fallback data.', error);
      return fallbackCVData;
    }
  },
};
