import { Request, Response, NextFunction } from 'express';
import { CVModel } from '../models/cv.model';
import { ApiResponse } from '../views/apiResponse';

export class CVController {
  public static async getFullCV(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const cv = await CVModel.getFullCV();
      ApiResponse.success(res, cv);
    } catch (error) {
      next(error);
    }
  }

  public static async getProfile(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const profile = await CVModel.getProfile();
      ApiResponse.success(res, profile);
    } catch (error) {
      next(error);
    }
  }

  public static async getSignals(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const signals = await CVModel.getSignals();
      ApiResponse.success(res, signals);
    } catch (error) {
      next(error);
    }
  }

  public static async getExperience(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const experience = await CVModel.getExperience();
      ApiResponse.success(res, experience);
    } catch (error) {
      next(error);
    }
  }

  public static async getSkills(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const skills = await CVModel.getSkills();
      ApiResponse.success(res, skills);
    } catch (error) {
      next(error);
    }
  }

  public static async getEducation(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const education = await CVModel.getEducation();
      ApiResponse.success(res, education);
    } catch (error) {
      next(error);
    }
  }

  public static async getLanguage(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const language = await CVModel.getLanguage();
      ApiResponse.success(res, language);
    } catch (error) {
      next(error);
    }
  }

  public static async getContact(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const contact = await CVModel.getContact();
      ApiResponse.success(res, contact);
    } catch (error) {
      next(error);
    }
  }
}
