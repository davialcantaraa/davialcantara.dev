import { Breadcrumbs } from "@/components/breadcrumbs";
import { getDictionary } from "@/lib/api/get-dictionaries";
import { getSinglePost } from "@/lib/api/get-single-post";
import { I18nPageProps } from "@/types/globals";

export default async function Page(props: I18nPageProps) {
  const dictionary = await getDictionary(props.params.lang);
  const slug = props.params.lang === "pt" ? "sobre-mim" : "about-me";

  const post = await getSinglePost(slug);

  return (
    <main className="container relative mx-auto h-full max-w-3xl py-20">
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.markdown }}
      />
      <Breadcrumbs
        href={dictionary.about.breadcrumbs.url}
        label={dictionary.about.breadcrumbs.label}
      />
    </main>
  );
}
