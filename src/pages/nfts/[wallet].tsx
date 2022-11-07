import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import { DefaultProfile } from '../../components/DefaultProfile';
import { NftCollectionCard } from '../../components/NftCollectionCard';
import { CardContainer } from '../../components/NftCollectionCard/styles';
import { Nothing } from '../../components/Nothing';
import { ProfileConnectButton } from '../../components/ProfileConnectButton';
import { SearchNft } from '../../components/SearchNft';
import { nftApi } from '../../services/axios';
import { Box } from '../../styles/primitives/Box';
import { Text } from '../../styles/primitives/Text';
import { VerticalBox } from '../../styles/primitives/VerticalBox';
import { INftCollection } from '../../@types/nfts';
import { Tab, TabContent, TabList, TabTrigger } from './styles';

interface GuestNftsProps {
  guestNfts: INftCollection[];
  nfts: INftCollection[];
}

const GuestNfts = ({ guestNfts, nfts }: GuestNftsProps) => {
  const router = useRouter();
  const { address } = useAccount();
  const guestWallet = router.query.wallet;
  const connectedWallet = address;

  return (
    <Box variant="page">
      <VerticalBox as="header" css={{ gap: '$10' }}>
        <VerticalBox>
          <Text type="title">NFTs</Text>
          <Text type="paragraph">NFTs playground</Text>
        </VerticalBox>
        <SearchNft />
        <Box css={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <DefaultProfile />
          <ProfileConnectButton />
        </Box>
      </VerticalBox>
      <Tab defaultValue="tab2">
        <TabList>
          <TabTrigger value="tab1">My NFTs</TabTrigger>
          <TabTrigger value="tab2">
            {guestWallet === connectedWallet ? 'Your NFTs' : 'Searched NFTs'}
          </TabTrigger>
        </TabList>
        <TabContent value="tab1">
          <VerticalBox>
            {nfts.length ? (
              <CardContainer type="multiple">
                {nfts.map(collection => (
                  <NftCollectionCard
                    key={collection.openseaUrl}
                    collection={collection}
                  />
                ))}
              </CardContainer>
            ) : (
              <Nothing />
            )}
          </VerticalBox>
        </TabContent>
        <TabContent value="tab2">
          <VerticalBox>
            {guestNfts.length ? (
              <CardContainer type="multiple">
                {guestNfts.map(collection => (
                  <NftCollectionCard
                    key={collection.openseaUrl}
                    collection={collection}
                  />
                ))}
              </CardContainer>
            ) : (
              <Nothing />
            )}
          </VerticalBox>
        </TabContent>
      </Tab>
    </Box>
  );
};

export default GuestNfts;

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
}) => {
  const { wallet } = params as { wallet: string };
  const network = query.network;
  const { data: nfts } = await nftApi.get('/api/polygon');
  let guestNfts = [];
  switch (network) {
    case 'ethereum': {
      const { data } = await nftApi.get(`api/ethereum/${wallet}`);
      guestNfts = data;
      break;
    }
    case 'polygon': {
      const { data } = await nftApi.get(`api/polygon/${wallet}`);
      guestNfts = data;
      break;
    }
    default: {
      const { data } = await nftApi.get(`api/polygon/${wallet}`);
      guestNfts = data;
    }
  }
  return {
    props: {
      guestNfts,
      nfts,
    },
  };
};
