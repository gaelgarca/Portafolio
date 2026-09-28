import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { corsOptions } from './config/cors';
import apiRoutes from './routes/index';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler';
import { requestLogger } from './middlewares/logger';
import { ApiResponse } from './views/apiResponse';

const app: Application = express();

// Middlewares globales
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// Ruta raíz informativa
app.get('/', (_req: Request, res: Response) => {
  ApiResponse.success(res, {
    name: 'Portfolio Backend API - Álvaro Gael García Ramírez',
    version: '1.0.0',
    documentation: '/api/cv',
    health: '/api/health',
  });
});

// Registro de rutas bajo el prefijo /api
app.use('/api', apiRoutes);

// Manejo de rutas inexistentes (404)
app.use(notFoundHandler);

// Manejo global de excepciones y errores
app.use(errorHandler);

export default app;
