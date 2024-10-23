export interface Experience {
  company: string;
  position: string;
  period: string;
  start: string;
  end: string;
  description: string;
  achievements: string[];
}

export interface Project {
  name: string;
  link: string;
  description: string;
  highlights?: string[];
  image?: string;
}

export interface Skill {
  name: string;
  level: number;
  description: string;
  improvement: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Interest {
  name: string;
  description: string;
}

export interface Award {
  name: string;
  description?: string;
  year: string | number;
  issuer: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  start: string;
  end?: string;
}

export interface ResumeData {
  id: string;
  template: 'default' | 'modern';
  name: string;
  title: string;
  email: string;
  phone: string;  
  location: string;
  website: string;
  github: string;
  linkedin: string;
  about: string;
  experience: Experience[];
  projects?: Project[];
  skills?: Skill[];
  languages?: Language[];
  interests?: Interest[];
  awards?: Award[];
  education?: Education[];
}
