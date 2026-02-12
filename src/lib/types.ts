export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  period: string;
  role: string;
  stack: string[];
  storeLinks: {
    playStore?: string;
    appStore?: string;
  };
  features: string[];
  architecture: string;
  challenges: {
    title: string;
    problem: string;
    solution: string;
  }[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}
