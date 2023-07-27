import { Locale } from "@/config/i18n";
import { getRepos } from "@/lib/api/get-projects";
import { Project } from "@/types/projects";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  lang: Locale;
}

export const Projects = async (props: Props) => {
  const repos: Project[] = await getRepos();

  const reposMarkup = repos.slice(0, 3).map((item) => (
    <div key={item.title} className="mt-2">
      <a
        href={item.external_url ?? item.github_url}
        className="flex items-center gap-3 underline decoration-muted-foreground underline-offset-2"
        target="_blank"
      >
        {item.title} <ArrowUpRight className="text-muted-foreground" />
        {item.archived && <Badge variant="secondary">Archived</Badge>}
      </a>
      <p className="!mt-1 text-muted-foreground">{item.description}</p>
    </div>
  ));

  return (
    <div className="relative flex flex-col overflow-hidden">
      <h3 className="mb-2 text-sm text-muted-foreground">{props.title}</h3>
      {reposMarkup}
    </div>
  );
};
