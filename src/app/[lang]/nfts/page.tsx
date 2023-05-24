import { Breadcrumbs } from "@/components/breadcrumbs";
import { getNfts } from "@/lib/api/get-nfts";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const nfts = await getNfts();

  const postsMarkup = nfts.map((item) => (
    <Link
      href={`/nfts/${item.contractAddress}?id=${item.id}`}
      key={item.id}
      className="group flex items-center justify-between border-b border-muted-foreground/50 py-2 transition-colors"
    >
      <Image
        src={item.image}
        alt={`A image of a NFT from collection ${item.title}`}
        width={30}
        height={30}
        loading="lazy"
        className="rounded-md"
      />
      <h3 className="font-medium group-hover:text-muted-foreground">
        {item.title}
      </h3>
      <span className="max-w-[50px] truncate text-sm text-muted-foreground group-hover:text-muted-foreground/70">
        #{item.id}
      </span>
    </Link>
  ));

  return (
    <main className="container relative mx-auto h-full max-w-3xl py-20">
      <article>
        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
          NFTs
        </h1>
        <div className="mt-6 flex flex-col">{postsMarkup}</div>
      </article>
      <Breadcrumbs href="/" label="Index" />
    </main>
  );
}
