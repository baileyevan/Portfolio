export interface Project {
  id: number;
  num: string;
  name: string;
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
  featured?: boolean;
  comingSoon?: boolean;
}

export interface SkillGroup {
  icon: string;
  name: string;
  skills: { label: string; accent?: boolean }[];
}

export interface TimelineItem {
  date: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}
