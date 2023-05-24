import { Breadcrumbs } from "@/components/breadcrumbs";
import { Locale } from "@/config/i18n";
import { getDictionary } from "@/lib/api/get-dictionaries";
import { getSinglePost } from "@/lib/api/get-single-post";

interface PageProps {
  params: {
    slug: string;
    lang: Locale;
  };
}

export default async function Page(props: PageProps) {
  const dictionary = await getDictionary(props.params.lang);
  const slug = props.params.slug;

  const post = await getSinglePost(slug);

  return (
    <main className="container relative mx-auto h-full max-w-3xl py-20">
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.markdown }}
      />
      <Breadcrumbs
        href={dictionary.writing.breadcrumbs.subpath.url}
        label={dictionary.writing.breadcrumbs.subpath.label}
      />
    </main>
  );
}
