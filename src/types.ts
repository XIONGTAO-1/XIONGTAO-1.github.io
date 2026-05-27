export type Profile = {
  name: string;
  title: string;
  tagline: string;
  location?: string;
  email: string;
  linkedinUrl: string;
  resumeUrl: string;
  reelUrl: string;
};

export type ProjectCategory =
  | "Rigging"
  | "Technical Animation"
  | "Tools"
  | "Pipeline"
  | "Gameplay Animation";

export type Project = {
  id: string;
  title: string;
  role: string;
  year?: string;
  category: ProjectCategory;
  tools: string[];
  summary: string;
  thumbnail: string;
  videoUrl: string;
  problem: string;
  contribution: string;
  technicalBreakdown: string[];
  outcome: string;
};
