import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
});

export const polygonApi = axios.create({
  baseURL: 'https://polygon-mainnet.g.alchemy.com/v2/',
});
