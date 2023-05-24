export type Project = {
  title: string;
  description: string;
  archived: boolean;
  stars: number;
  forks: number;
  github_url: string;
  external_url?: string;
  created_at: Date;
};
