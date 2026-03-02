
export interface Project {
  id: string;
  title: string;
  company?: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  duration?: string;
  jobdesks?: string[];
  problems?: string[];
  systems?: string[];
  tools?: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'Core' | 'Data' | 'Management' | 'Communication' | 'Technical' | 'Strategy';
  icon: string;
  explanation?: string;
  tools?: string[];
  behaviours?: {
    strategic: number;
    analytical: number;
    operational: number;
    leadership: number;
    risk: number;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
