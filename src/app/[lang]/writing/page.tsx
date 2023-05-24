import { Breadcrumbs } from "@/components/breadcrumbs";
import { getDictionary } from "@/lib/api/get-dictionaries";
import { getPosts } from "@/lib/api/get-posts";
import { I18nPageProps } from "@/types/globals";
import Link from "next/link";

export default async function Page(props: I18nPageProps) {
  const dictionary = await getDictionary(props.params.lang);

  const posts = await getPosts(props.params.lang);

  const postsMarkup = posts.map((item) => (
    <Link
      href={`/writing/${item.slug}`}
      key={item.id}
      className="group flex items-center justify-between border-b border-muted-foreground/50 py-2 transition-colors"
    >
      <h3 className="font-medium group-hover:text-muted-foreground">
        {item.title}
      </h3>
      <time className="text-sm text-muted-foreground group-hover:text-muted-foreground/70">
        {item.date}
      </time>
    </Link>
  ));

  return (
    <main className="container relative mx-auto h-full max-w-3xl py-20">
      <article>
        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {dictionary.writing.title}
        </h1>
        <div className="mt-6 flex flex-col">{postsMarkup}</div>
      </article>
      <Breadcrumbs
        href={dictionary.writing.breadcrumbs.url}
        label={dictionary.writing.breadcrumbs.label}
      />
    </main>
  );
}
