export type Profile = {
  name: string;
  title: string;
  tagline: string;
  location?: string;
  email: string;
  linkedinUrl: string;
  resumeUrl: string;
  photoUrl: string;
  about: string;
};

export type ProjectCategory =
  | "Rigging"
  | "Technical Animation"
  | "Tools"
  | "Pipeline"
  | "Gameplay Animation"
  | "Prop Art"
  | "Concept Design";

export type Project = {
  id: string;
  title: string;
  role: string;
  year?: string;
  category: ProjectCategory;
  tools: string[];
  summary: string;
  thumbnail: string;
  videos: ProjectVideo[];
  images?: ProjectImage[];
  overview: string;
  details: string[];
  process?: string[];
  detailMode?: "standard" | "image-only";
};

export type ProjectVideo = {
  url: string;
  title: string;
  autoplayOnOpen?: boolean;
};

export type ProjectImage = {
  src: string;
  alt: string;
};
