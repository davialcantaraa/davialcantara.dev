import { ArrowSquareOut } from 'phosphor-react';
import { Box } from '../../styles/primitives/Box';
import { Text } from '../../styles/primitives/Text';
import { Tooltip } from '../../styles/primitives/Tooltip';
import { VerticalBox } from '../../styles/primitives/VerticalBox';
import { formatWalletAddress } from '../../utils/formatWalletAddress';
import { Avatar } from '../Avatar';
import { Clipboard } from '../Clipboard';

export const DefaultProfile = () => {
  return (
    <Box
      css={{
        alignItems: 'center',
        gap: '$5',
        margin: '$8 0',
      }}
    >
      <Avatar source={'/assets/avatar.png'} size={70} />
      <VerticalBox css={{ gap: '$1' }}>
        <Text
          as="div"
          type="paragraph"
          css={{ display: 'flex', alignItems: 'center', gap: '$2' }}
        >
          divinurised
          <Tooltip
            content="Opensea"
            triggerCSS={{
              width: 'fit-content',
              lineHeight: 0,
              svg: {
                color: '$primary',
                size: '$6',
              },
            }}
            contentCSS={{
              background: '$secondaryGradient',
              color: '$primary',
            }}
            arrowCSS={{ fill: 'transparent' }}
          >
            <a
              href="https://opensea.io/divinurised"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowSquareOut />
            </a>
          </Tooltip>
        </Text>
        <Clipboard
          clipboardContent={formatWalletAddress(
            process.env.NEXT_PUBLIC_DIVINURISED_WALLET as string,
          )}
          tooltipContent={process.env.NEXT_PUBLIC_DIVINURISED_WALLET as string}
        />
      </VerticalBox>
    </Box>
  );
};
