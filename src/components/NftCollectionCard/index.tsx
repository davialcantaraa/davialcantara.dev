import Image from 'next/image';
import { useRouter } from 'next/router';
import { CaretDown, CaretRight } from 'phosphor-react';
import { useState } from 'react';
import { useNetwork } from 'wagmi';
import { EthereumIcon } from '../../../public/assets/EthereumIcon';
import { MaticIcon } from '../../../public/assets/MaticIcon';
import { INftCollection } from '../../@types/nfts';
import { Box } from '../../styles/primitives/Box';
import { Text } from '../../styles/primitives/Text';
import { Tooltip } from '../../styles/primitives/Tooltip';
import { VerticalBox } from '../../styles/primitives/VerticalBox';
import { LazyImage } from '../LazyImage';
import {
  CardContent,
  CardHeader,
  CardItem,
  CardTrigger,
  CustomExternalLinkIcon,
  HoverElement,
  NftContainer,
  NftText,
  skeletonLoader,
} from './styles';

interface NftCollectionCardProps {
  collection: INftCollection;
}

export const NftCollectionCard = ({ collection }: NftCollectionCardProps) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const { query } = useRouter();
  const { network } = query;

  return (
    <CardItem value={collection.collectionName} data-nft-card>
      <CardHeader asChild>
        <CardTrigger onClick={() => setIsCardOpen(prevState => !prevState)}>
          <Box
            css={{
              alignItems: 'center',
              gap: '$3',
              width: '100%',
              svg: {
                color: '$primary',
                size: '$6',
              },
            }}
          >
            {isCardOpen ? <CaretDown /> : <CaretRight />}
            <Box
              css={{
                borderRadius: 9999,
                width: 'fit-content',
                overflow: 'hidden',
                animation: `${skeletonLoader} 3s 2s infinite`,
              }}
            >
              <LazyImage src={collection.nfts[0].image} size={50} priority />
            </Box>
            <VerticalBox css={{ gap: '$1' }}>
              <Text type="paragraph">{collection.collectionName}</Text>
              <Tooltip
                content="Polygon Network"
                triggerCSS={{
                  width: 'fit-content',
                  lineHeight: 0,
                  zIndex: 3,
                }}
              >
                {network === 'ethereum' ? <EthereumIcon /> : <MaticIcon />}
              </Tooltip>
            </VerticalBox>
            <Box
              css={{
                margin: 'auto 0 0 auto',
                alignItems: 'flex-end',
                gap: '$2',
                transition: '0.2s',
                opacity: !isCardOpen ? 1 : 0,
              }}
            >
              {collection.nfts.map(nft => (
                <>
                  <LazyImage
                    key={nft.id}
                    src={nft.image}
                    size={30}
                    customCSS={{ borderRadius: '$2' }}
                    priority
                  />
                </>
              ))}
            </Box>
          </Box>
          <HoverElement />
        </CardTrigger>
      </CardHeader>
      <CardContent>
        <NftContainer>
          {collection.nfts.map(nft => (
            <VerticalBox key={nft.id}>
              <Box
                css={{
                  borderRadius: '$6',
                  width: 'fit-content',
                  overflow: 'hidden',
                  animation: `${skeletonLoader} 3s 2s infinite`,
                }}
              >
                <Image
                  src={`https://res.cloudinary.com/demo/image/fetch/${nft.image}`}
                  width={200}
                  height={200}
                  objectFit="cover"
                />
              </Box>
              <NftText type="paragraph">
                {nft.number}
                <Tooltip
                  content="Opensea"
                  triggerCSS={{
                    width: 'fit-content',
                    lineHeight: 0,
                  }}
                  contentCSS={{
                    background: '$secondaryGradient',
                    color: '$primary',
                  }}
                  arrowCSS={{ fill: 'transparent' }}
                >
                  <a href={nft.openseaUrl} target="_blank" rel="noreferrer">
                    <CustomExternalLinkIcon />
                  </a>
                </Tooltip>
              </NftText>
            </VerticalBox>
          ))}
        </NftContainer>
      </CardContent>
    </CardItem>
  );
};
