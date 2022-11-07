import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';
import { CircleNotch, Plus, User } from 'phosphor-react';
import { useState } from 'react';
import { useAccount, useNetwork } from 'wagmi';
import { keyframes, styled } from '../../../stitches.config';
import { Box } from '../../styles/primitives/Box';
import { Text } from '../../styles/primitives/Text';
import { Tooltip } from '../../styles/primitives/Tooltip';
import { VerticalBox } from '../../styles/primitives/VerticalBox';
import { formatWalletAddress } from '../../utils/formatWalletAddress';
import { Clipboard } from '../Clipboard';
import { CustomNFTIcon } from '../Header/styles';
import { SingleAvatar } from '../SingleAvatar';

const PLACEHOLDER_WALLET_ADDRESS = '0x000000000000000';

export const CustomPlusIcon = styled(Plus, {
  size: '$9',
  color: 'transparent',
  position: 'absolute',
  transition: 'all 0.2s ease',
});

export const CustomGuestNftIcon = styled(CustomNFTIcon, {
  size: '$9',
  color: 'transparent',
  position: 'absolute',
  transition: 'all 0.2s ease',
});

const infiniteRotate = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(359deg)',
  },
});

export const CustomLoadingIcon = styled(CircleNotch, {
  size: '$6',
  color: '$primary',
  animation: `${infiniteRotate} 3s infinite linear`,
  position: 'absolute',
});

const CustomAccountIcon = styled(User, {
  size: '$9',
  color: 'transparent',
  position: 'absolute',
  transition: 'all 0.2s ease',
});

export const ProfileConnectButton = () => {
  const formatedPlaceholderWalletAddress = formatWalletAddress(
    PLACEHOLDER_WALLET_ADDRESS,
  );
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { wallet: activePath } = router.query;
  const { address } = useAccount();
  const { chain } = useNetwork();
  console.log(chain);

  const handleShowGuestNfts = () => {
    setIsLoading(true);
    router.push(`/nfts/${address}?network=${chain?.name.toLowerCase()}`);
  };

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted, openAccountModal }) => {
        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <Box
                    css={{
                      alignItems: 'center',
                      gap: '$5',
                      margin: '$8 0',
                      flexDirection: 'row-reverse',
                      [`& ${VerticalBox}`]: {
                        alignItems: 'flex-end',
                      },
                    }}
                  >
                    <Tooltip content="Connect wallet">
                      <Box
                        as="button"
                        type="button"
                        onClick={openConnectModal}
                        css={{
                          position: 'relative',
                          justifyContent: 'center',
                          alignItems: 'center',
                          cursor: 'pointer',
                          '&:hover': {
                            [`& ${CustomPlusIcon}`]: {
                              color: '$primary',
                            },
                          },
                        }}
                      >
                        <CustomPlusIcon />
                        <SingleAvatar size={70} />
                      </Box>
                    </Tooltip>
                    <VerticalBox css={{ gap: '$1' }}>
                      <Text
                        as="div"
                        type="paragraph"
                        css={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '$2',
                        }}
                      >
                        Guest
                      </Text>
                      <Clipboard
                        clipboardContent={formatedPlaceholderWalletAddress}
                        tooltipContent={PLACEHOLDER_WALLET_ADDRESS}
                      />
                    </VerticalBox>
                  </Box>
                );
              }

              return (
                <Box
                  css={{
                    alignItems: 'center',
                    gap: '$5',
                    margin: '$8 0',
                    flexDirection: 'row-reverse',
                    [`& ${VerticalBox}`]: {
                      alignItems: 'flex-end',
                    },
                  }}
                >
                  <Box
                    css={{
                      position: 'relative',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {activePath !== account.address ? (
                      <Tooltip content="Show my NFTs">
                        <Box
                          as="button"
                          type="button"
                          onClick={handleShowGuestNfts}
                          css={{
                            position: 'relative',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            '&:hover': {
                              [`& ${CustomGuestNftIcon}`]: {
                                color: '$primary',
                              },
                            },
                          }}
                        >
                          <SingleAvatar size={70} bg="$secondaryGradient" />
                          {isLoading ? (
                            <CustomLoadingIcon />
                          ) : (
                            <CustomGuestNftIcon />
                          )}
                        </Box>
                      </Tooltip>
                    ) : (
                      <Tooltip content="Account">
                        <Box
                          as="button"
                          type="button"
                          onClick={openAccountModal}
                          css={{
                            position: 'relative',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            '&:hover': {
                              [`& ${CustomAccountIcon}`]: {
                                color: '$primary',
                              },
                            },
                          }}
                        >
                          <SingleAvatar size={70} bg="$secondaryGradient" />
                          <CustomAccountIcon />
                        </Box>
                      </Tooltip>
                    )}
                  </Box>
                  <VerticalBox css={{ gap: '$1' }}>
                    <Text
                      as="div"
                      type="paragraph"
                      css={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '$2',
                      }}
                    >
                      {account.displayName}
                    </Text>
                    <Clipboard
                      clipboardContent={formatWalletAddress(account.address)}
                      tooltipContent={account.address}
                    />
                  </VerticalBox>
                </Box>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
