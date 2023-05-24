import { nft } from "../nft";
import { getNFTsData } from "../utils";

export async function getNfts() {
  const nfts = await nft.nft.getNftsForOwner(String(process.env.WALLET_ID));
  return getNFTsData(nfts.ownedNfts);
}
