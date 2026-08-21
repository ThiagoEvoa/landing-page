export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  stars?: number;
  language: string;
  languageColor: string;
  repoUrl: string;
  demoUrl?: string;
  featured: boolean;
  metrics?: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  url: string;
  readTime: string;
  date: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string; // 'Expert' | 'Advanced' | 'Proficient'
    highlight?: boolean;
  }[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
  primary?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company?: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ProfileData {
  name: string;
  fullName: string;
  title: string;
  tagline: string;
  location: string;
  avatarUrl: string;
  bioSummary: string;
  bioQuote: string;
  aboutText: string[];
  stats: {
    value: string;
    label: string;
    suffix?: string;
  }[];
  socials: SocialLink[];
  skillsCategories: SkillCategory[];
  featuredProjects: Project[];
  articles: Article[];
  experience: ExperienceItem[];
}
