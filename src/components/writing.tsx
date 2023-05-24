import { Locale } from "@/config/i18n";
import { getPosts } from "@/lib/api/get-posts";
import Link from "next/link";

interface Props {
  title: string;
  lang: Locale;
}

export const Writing = async (props: Props) => {
  const posts = await getPosts(props.lang);

  const postsMarkup = posts.map((post) => (
    <div key={post.title} className="mt-2">
      <Link
        href={`/writing/${post.slug}`}
        className="flex items-center gap-3 underline decoration-muted-foreground underline-offset-2"
      >
        {post.title}
      </Link>
      <p className="!mt-1 text-muted-foreground">{post.description}</p>
    </div>
  ));

  return (
    <div className="flex flex-col">
      <h3 className="mb-2 text-sm text-muted-foreground">{props.title}</h3>
      {postsMarkup}
    </div>
  );
};
