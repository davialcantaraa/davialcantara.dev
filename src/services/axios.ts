import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
});

export const polygonApi = axios.create({
  baseURL: 'https://polygon-mainnet.g.alchemy.com/v2/',
});

export const ethereumApi = axios.create({
  baseURL: 'https://eth-mainnet.alchemyapi.io/nft/v2/',
});

export const nftApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NFT_API_URL,
});

export const openseaApi = axios.create({
  baseURL: 'https://api.opensea.io/api/v1/',
});
