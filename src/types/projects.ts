export type ProjectStatus = "published" | "in-progress" | "coming-soon";

export type Project = {
  title: string;
  slug: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tools: string[];
  githubUrl: string;
  demoUrl?: string;
  videoUrl?: string;
  image: string;
  status: ProjectStatus;
  featured: boolean;
};