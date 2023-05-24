import { Breadcrumbs } from "@/components/breadcrumbs";
import { Locale } from "@/config/i18n";
import { siteConfig } from "@/config/site";
import { getSingleNft } from "@/lib/api/get-single.nft";
import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

interface PageProps {
  params: {
    contractAddress: string;
    lang: Locale;
  };
  searchParams: {
    id: string;
  };
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const contractAddress = props.params.contractAddress;
  const nftId = props.searchParams.id;

  const requestedNft = await getSingleNft(contractAddress, nftId);

  return {
    title: requestedNft.title,
    description: requestedNft.description,
    openGraph: {
      title: requestedNft.title,
      description: requestedNft.description,
      type: "article",
      url: absoluteUrl(
        `${props.params.lang}/nfts/${contractAddress}?id=${requestedNft.id}`
      ),
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
      title: requestedNft.title,
      description: requestedNft.description,
      images: [siteConfig.ogImage],
      creator: "@davialcantaraa",
    },
  };
}

export default async function Page(props: PageProps) {
  const contractAddress = props.params.contractAddress;
  const nftId = props.searchParams.id;

  const requestedNft = await getSingleNft(contractAddress, nftId);

  return (
    <main className="container relative mx-auto h-full max-w-3xl py-20">
      <article className="prose">
        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {requestedNft.title}
        </h1>
        <p className="mb-10 mt-6">{requestedNft.description}</p>
        <Image
          src={requestedNft.image}
          width={200}
          height={200}
          alt={`A image of a NFT from collection ${requestedNft.title}`}
          className="rounded-md"
          loading="lazy"
        />
      </article>
      <Breadcrumbs href="/nfts" label="NFTs" />
    </main>
  );
}
