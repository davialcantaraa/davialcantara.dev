import { Breadcrumbs } from "@/components/breadcrumbs";
import { getSingleNft } from "@/lib/api/get-single.nft";
import Image from "next/image";

interface PageProps {
  params: {
    contractAddress: string;
  };
  searchParams: {
    id: string;
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
