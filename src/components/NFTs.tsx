import { Locale } from "@/config/i18n";
import { getNfts } from "@/lib/api/get-nfts";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  lang: Locale;
}

export const NFTs = async (props: Props) => {
  const nfts = await getNfts();

  const nftsMarkup = nfts.slice(0, 8).map((nft) => (
    <div key={nft.title} className="mt-2">
      <Link href={nft.url} className="flex w-full items-center gap-3">
        <Image
          src={nft.image}
          alt={`A image of a NFT from collection ${nft.title}`}
          width={30}
          height={30}
          loading="lazy"
          className="rounded-md"
        />
        <span className="nft-columns grid w-full items-end leading-tight">
          <span className="truncate underline decoration-muted-foreground underline-offset-2">
            {nft.title}
          </span>{" "}
          <small className="truncate text-end text-muted-foreground">
            #{nft.id}
          </small>
        </span>
      </Link>
    </div>
  ));

  return (
    <div className="flex max-h-80 flex-col">
      <h3 className="mb-2 text-sm text-muted-foreground">{props.title}</h3>
      {nftsMarkup}
    </div>
  );
};
