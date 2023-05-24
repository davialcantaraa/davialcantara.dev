import { PROJECTS_TITLES } from "@/config/projects";

export async function getRepos() {
  const res = await fetch("https://api.github.com/users/davialcantaraa/repos");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data
    .filter((item: any) => PROJECTS_TITLES.includes(item.name))
    .map((item: any) => ({
      title: item.name,
      description: item.description,
      archived: item.archived,
      stars: item.stargazers_count,
      forks: item.forks_count,
      external_url: item.homepage,
      github_url: item.html_url,
      created_at: item.created_at,
    }));
}
