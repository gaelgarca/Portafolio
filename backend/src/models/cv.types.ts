export interface Contact {
  email: string;
  phone: string;
  location: string;
  cvPdfUrl: string;
}

export interface Profile {
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  fullName: string;
  headline: string;
  bio: string;
  currentStatus: string;
  location: string;
}

export interface Signal {
  id: string;
  label: string;
  value: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent: boolean;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  status: string;
}

export interface Language {
  name: string;
  level: string;
  description: string;
  capabilities: string;
}

export interface CV {
  profile: Profile;
  signals: Signal[];
  experience: Experience[];
  skills: SkillCategory[];
  education: Education;
  language: Language;
  contact: Contact;
}

