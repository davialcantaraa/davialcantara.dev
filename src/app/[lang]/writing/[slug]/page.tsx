import { Breadcrumbs } from "@/components/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Locale } from "@/config/i18n";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/lib/api/get-dictionaries";
import { getSinglePost } from "@/lib/api/get-single-post";
import { absoluteUrl, translateDateToPortuguese } from "@/lib/utils";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
    lang: Locale;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getSinglePost(params.slug);

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: "article",
      url: absoluteUrl(`${params.lang}/writing/${post.metadata.slug}`),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.description,
      images: [siteConfig.ogImage],
      creator: "@davialcantaraa",
    },
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
