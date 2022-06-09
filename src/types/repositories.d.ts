export interface IRepo {
  name: string;
  description: string;
  productionUrl: string;
  repositoryUrl: string;
  stars: number;
  forks: number;
}

export interface ReceivedRepo {
  name: string;
  description: string;
  homepage: string;
  html_url: string;
  startgazers_count: number;
  forks_count: number;
}
