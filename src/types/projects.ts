export type ProjectStatus = "published" | "in-progress" | "coming-soon";

export type Project = {
  title: string;
  slug: string;
  description: string;
  tools: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  status: ProjectStatus;
  featured: boolean;
};