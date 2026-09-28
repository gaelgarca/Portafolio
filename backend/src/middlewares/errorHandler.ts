import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../views/apiResponse';

export interface AppError extends Error {
  statusCode?: number;
}

export const errorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error interno del servidor';

  console.error(`[Error Handler] ${statusCode} - ${message}`);
  if (err.stack) {
    console.error(err.stack);
  }

  ApiResponse.error(res, message, statusCode);
};

export const notFoundHandler = (req: Request, res: Response): void => {
  ApiResponse.error(
    res,
    `Ruta no encontrada: ${req.method} ${req.originalUrl}`,
    404
  );
};
