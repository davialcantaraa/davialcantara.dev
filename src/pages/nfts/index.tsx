import { Avatar } from '../../components/Avatar';
import { Clipboard } from '../../components/Clipboard';
import { Box } from '../../styles/primitives/Box';
import { Text } from '../../styles/primitives/Text';
import { VerticalBox } from '../../styles/primitives/VerticalBox';
import { INftCollection } from '../../types/nfts';
import { formatWalletAddress } from '../../utils/formatWalletAddress';

interface NftsProps {
  nfts: INftCollection;
}

const Nfts = ({ nfts }: NftsProps) => {
  return (
    <>
      <Box
        limit="md"
        css={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '$10',
          gap: '$13',
        }}
      >
        <VerticalBox as="section">
          <Text type="title">NFTs</Text>
          <Text type="paragraph">My NFTs</Text>
          <Clipboard
            clipboardContent={formatWalletAddress(
              '0x1d1A113C517DA481dFb106292a8c134c2DcB7517',
            )}
            tooltipContent="0x1d1A113C517DA481dFb106292a8c134c2DcB7517"
          />
          <Avatar
            source="https://i.pinimg.com/736x/0f/95/29/0f95293a9858952dc80a236c4904789f.jpg"
            size={70}
          />
        </VerticalBox>
      </Box>
    </>
  );
};

export default Nfts;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data: nfts } = await nftApi.get('/api/polygon');
//   return {
//     props: {
//       nfts,
//     },
//   };
// };
