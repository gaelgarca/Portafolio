import { Router, Request, Response } from 'express';
import cvRoutes from './cv.routes';
import { ApiResponse } from '../views/apiResponse';

const router = Router();

// Endpoint de verificación de salud (Health Check)
router.get('/health', (_req: Request, res: Response) => {
  ApiResponse.success(res, {
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'portfolio-backend',
  });
});

// Enrutador del recurso CV
router.use('/cv', cvRoutes);

export default router;
