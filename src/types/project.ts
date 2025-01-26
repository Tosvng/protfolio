export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Technology {
  name: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  images: ProjectImage[];
  technologies: Technology[];
  websiteUrl?: string;
}
