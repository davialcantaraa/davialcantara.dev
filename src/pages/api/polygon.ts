import type { NextApiRequest, NextApiResponse } from 'next';
import { polygonApi } from '../../services/axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const apiKey = process.env.POLYGON_API_KEY;
  const ownerAddr = '0xB6391144F5D044622f66EE2d53F9003d717f7B65';
  const { data } = await polygonApi.get(
    `/${apiKey}/getNFTs?owner=${ownerAddr}`,
  );
  res.status(200).json(data);
};
