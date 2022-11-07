export interface INftCollection {
  collectionName: string;
  openseaUrl: string;
  nfts: INft[];
}

export interface INft {
  title: string;
  number: number | string;
  description: string;
  contract: string;
  image: string;
  id: number;
  openseaUrl: string;
}

export interface Contract {
  address: string;
}

export interface TokenMetadata {
  tokenType: string;
}

export interface Id {
  tokenId: string;
  tokenMetadata: TokenMetadata;
}

export interface TokenUri {
  raw: string;
  gateway: string;
}

export interface Medium {
  raw: string;
  gateway: string;
}

export interface Attribute {
  value: string;
  trait_type: string;
}

export interface Metadata {
  name: string;
  description: string;
  dna: number;
  image: string;
  external_url: string;
  attributes: Attribute[];
}

export interface OwnedNft {
  contract: Contract;
  id: Id;
  title: string;
  description: string;
  tokenUri: TokenUri;
  media: Medium[];
  metadata: Metadata;
  timeLastUpdated: Date;
}

export interface IReceivedNft {
  ownedNfts: OwnedNft[];
  totalCount: number;
  blockHash: string;
}
