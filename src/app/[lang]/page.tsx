import { NFTs } from "@/components/NFTs";
import { Projects } from "@/components/projects";
import { Writing } from "@/components/writing";
import { getDictionary } from "@/lib/api/get-dictionaries";
import { I18nPageProps } from "@/types/globals";
import Link from "next/link";

export default async function Home(props: I18nPageProps) {
  const dictionary = await getDictionary(props.params.lang);

  const navigationMarkup = dictionary.index.navigation.map((item) => (
    <li
      key={item.url}
      className="text-muted-foreground underline underline-offset-2"
    >
      <Link href={item.url} prefetch>
        {item.label}
      </Link>
    </li>
  ));

  return (
    <main className="container mx-auto h-full max-w-3xl py-20">
      <article>
        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {dictionary.index.title}
        </h1>
        <p className="mb-10 mt-6">
          <span className="font-serif italic">
            {dictionary.index.subtitle.italic}
          </span>{" "}
          {dictionary.index.subtitle.base}
        </p>
        <div className="w-full">
          <ul className="flex space-x-3">{navigationMarkup}</ul>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-10">
          {/* @ts-expect-error Server Component */}
          <Projects
            title={dictionary.index.grid.projects}
            lang={props.params.lang}
          />
          {/* @ts-expect-error Server Component */}
          <Writing
            title={dictionary.index.grid.writing}
            lang={props.params.lang}
          />
          {/* @ts-expect-error Server Component */}
          <NFTs title={dictionary.index.grid.nfts} lang={props.params.lang} />
        </div>
      </article>
    </main>
  );
}
