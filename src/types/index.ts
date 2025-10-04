export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  docUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  github: string;
  linkedin: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  description: string;
  imageUrl?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  imageUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}