export interface ProjectContent {
  title: string;
  images?: string[];
  videos?: string[];
}
export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  link: string;
  content: ProjectContent[];
}
