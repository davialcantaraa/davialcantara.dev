import { nft } from "../nft";
import { getSingleNFTData } from "../utils";

export async function getSingleNft(contractAddress: string, nftId: string) {
  const singleNft = await nft.nft.getNftMetadata(contractAddress, nftId);
  return getSingleNFTData(singleNft);
}
