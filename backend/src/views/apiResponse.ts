import { Response } from 'express';

export interface ApiResponsePayload<T> {
  success: boolean;
  data: T | null;
  error?: string;
  timestamp: string;
}

export class ApiResponse {
  public static success<T>(res: Response, data: T, statusCode = 200): void {
    const payload: ApiResponsePayload<T> = {
      success: true,
      data,
      timestamp: new Date().toISOString(),
    };
    res.status(statusCode).json(payload);
  }

  public static error(res: Response, message: string, statusCode = 500): void {
    const payload: ApiResponsePayload<null> = {
      success: false,
      data: null,
      error: message,
      timestamp: new Date().toISOString(),
    };
    res.status(statusCode).json(payload);
  }
}
