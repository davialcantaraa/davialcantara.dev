import type { NextApiRequest, NextApiResponse } from 'next';
import { ethereumApi } from '../../../services/axios';
import { IReceivedNft } from '../../../@types/nfts';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.wallet.length < 42) {
    res.status(400).json({ error: 'Invalid wallet address' });
  }

  const ownerAddr = req.query.wallet;
  const apiKey = process.env.POLYGON_API_KEY;
  const { data } = await ethereumApi.get(
    `/${apiKey}/getNFTs?owner=${ownerAddr}`,
  );

  const { ownedNfts }: IReceivedNft = data;

  const collections = ownedNfts.map(nft => nft.title.split(' #')[0]);

  let filteredCollections: any = [];

  collections.forEach(collection => {
    if (!filteredCollections.includes(collection)) {
      filteredCollections.push(collection);
    }
  });

  const nfts = filteredCollections.map((collection: any) => ({
    collectionName: collection.includes('#') ? '-' : collection,
    openseaUrl: `https://opensea.io/collection/${collection
      .replace(' ', '-')
      .toLowerCase()}`,
    nfts: ownedNfts
      .filter(nft => nft.title.split(' #')[0] === collection)
      .map(nft => ({
        title: nft.title,
        number: nft.title.split(' #')[1],
        description: nft.description,
        contract: nft.contract.address,
        image: nft.media[0].gateway,
        id: nft.metadata.dna,
        openseaUrl: `https://opensea.io/assets/ethereum/${
          nft.contract.address
        }/${nft.title.split(' #')[1]}`,
      })),
  }));

  res.status(200).json(nfts);
};
