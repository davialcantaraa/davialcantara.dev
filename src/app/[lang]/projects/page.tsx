import { Breadcrumbs } from "@/components/breadcrumbs";
import { getDictionary } from "@/lib/api/get-dictionaries";
import { getRepos } from "@/lib/api/get-projects";
import { I18nPageProps } from "@/types/globals";
import { Project } from "@/types/projects";

export default async function Page(props: I18nPageProps) {
  const dictionary = await getDictionary(props.params.lang);
  const repos: Project[] = await getRepos();

  const reposMarkup = repos.map((item) => (
    <a
      href={item.github_url}
      key={item.github_url}
      className="group flex flex-wrap gap-1 justify-between border-b border-muted-foreground/50 py-2 transition-colors"
      target="_blank"
    >
      <h3 className="font-medium group-hover:text-muted-foreground">
        {item.title}
      </h3>
      <p className="text-muted-foreground group-hover:text-muted-foreground/70">
        {item.description}
      </p>
    </a>
  ));

  return (
    <main className="container relative mx-auto h-full max-w-3xl py-20">
      <article>
        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {dictionary.projects.title}
        </h1>
        <p className="mb-10 mt-6">{dictionary.projects.subtitle}</p>
        <div className="flex flex-col">{reposMarkup}</div>
      </article>
      <Breadcrumbs
        href={dictionary.projects.breadcrumbs.url}
        label={dictionary.projects.breadcrumbs.label}
      />
    </main>
  );
}
