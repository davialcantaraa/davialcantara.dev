import { NextApiRequest, NextApiResponse } from 'next';
import { githubApi } from '../../services/axios';
import { projects } from '../../utils/projects';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let response: any = [];

  for await (const project of projects) {
    const { data }: any = await githubApi.get(`/repos/divinurised/${project}`);
    response.push(data);
  }

  const repos = await Promise.all(
    response.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      productionUrl: repo.homepage,
      repositoryUrl: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
    })),
  );

  res.status(200).json(repos);
};
