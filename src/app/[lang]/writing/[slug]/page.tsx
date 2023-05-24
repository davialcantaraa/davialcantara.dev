import { Breadcrumbs } from "@/components/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Locale } from "@/config/i18n";
import { getDictionary } from "@/lib/api/get-dictionaries";
import { getSinglePost } from "@/lib/api/get-single-post";
import { translateDateToPortuguese } from "@/lib/utils";

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
  const postDate =
    props.params.lang === "pt"
      ? translateDateToPortuguese(post.metadata.date)
      : post.metadata.date;

  const badgesMarkup = post.metadata.tags.map((tag: string) => (
    <Badge key={tag}>{tag}</Badge>
  ));

  return (
    <main className="container relative mx-auto h-full max-w-3xl py-20">
      <div className="flex flex-col space-y-2">
        <span className="text-muted-foreground">{postDate}</span>
        <div className="space-x-2 pb-4  ">{badgesMarkup}</div>
      </div>
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
