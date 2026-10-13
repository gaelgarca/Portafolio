export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  cvPdfUrl: string;
}

export interface ProfileInfo {
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  headline: string;
  bio: string;
  currentStatus: string;
  lead?: string;
}

export interface SignalMetric {
  id: string;
  label: string;
  value: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  description: string;
  capabilities: string;
}

export interface CVData {
  profile: ProfileInfo;
  signals: SignalMetric[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  education: EducationItem;
  language: LanguageItem;
  contact: ContactInfo;
}

