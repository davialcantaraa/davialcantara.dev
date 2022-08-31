import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const nft = 'CUBO PLANET #280';
  const newnft = nft.split(' #');
  res.status(200).json(newnft);
};
