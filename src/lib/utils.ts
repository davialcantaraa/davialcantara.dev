import { Nft, OwnedNft } from "alchemy-sdk";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPageMetaData(post: any) {
  const getTags = (tags: any) => {
    const allTags = tags.map((tag: any) => {
      return tag.name;
    });

    return allTags;
  };

  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select),
    lang: getTags(post.properties.Lang.multi_select)[0],
    description: post.properties.Description.rich_text[0].plain_text,
    date: getToday(post.properties.Date.last_edited_time),
    slug: post.properties.Slug.rich_text[0].plain_text,
  };
}

export function getToday(datestring: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();

  if (datestring) {
    date = new Date(datestring);
  }

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let today = `${month} ${day}, ${year}`;

  return today;
}

export function getNFTsData(nftsArray: OwnedNft[]) {
  const nfts = nftsArray.map((nft) => ({
    titleWithId: nft.title,
    title: nft.contract.name,
    description: nft.description,
    image: nft.media[0].gateway,
    id: nft.tokenId,
    contractAddress: nft.contract.address,
    url: `/nfts/${nft.contract.address}?id=${nft.tokenId}`,
    openseaUrl: ``,
  }));
  return nfts;
}

export function getSingleNFTData(nft: Nft) {
  return {
    titleWithId: nft.title,
    title: nft.contract.name,
    description: nft.description,
    image: nft.media[0].gateway,
    id: nft.tokenId,
    contractAddress: nft.contract.address,
    url: `/nfts/${nft.contract.address}?id=${nft.tokenId}`,
    openseaUrl: ``,
  };
}

export function translateDateToPortuguese(dateString: string) {
  const months = {
    January: "janeiro",
    February: "fevereiro",
    March: "março",
    April: "abril",
    May: "maio",
    June: "junho",
    July: "julho",
    August: "agosto",
    September: "setembro",
    October: "outubro",
    November: "novembro",
    December: "dezembro",
  };

  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  // @ts-ignore
  return `${day} de ${months[month]} de ${year}`;
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
