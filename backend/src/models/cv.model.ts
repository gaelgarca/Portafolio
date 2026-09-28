import rawData from '../data/cvData.json';
import {
  CV,
  Profile,
  Signal,
  Experience,
  SkillCategory,
  Education,
  Language,
  Contact,
} from './cv.types';

export class CVModel {
  private static data: CV = rawData as CV;

  public static async getFullCV(): Promise<CV> {
    return this.data;
  }

  public static async getProfile(): Promise<Profile> {
    return this.data.profile;
  }

  public static async getSignals(): Promise<Signal[]> {
    return this.data.signals;
  }

  public static async getExperience(): Promise<Experience[]> {
    return this.data.experience;
  }

  public static async getSkills(): Promise<SkillCategory[]> {
    return this.data.skills;
  }

  public static async getEducation(): Promise<Education> {
    return this.data.education;
  }

  public static async getLanguage(): Promise<Language> {
    return this.data.language;
  }

  public static async getContact(): Promise<Contact> {
    return this.data.contact;
  }
}
