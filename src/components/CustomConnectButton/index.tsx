import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';
import { Tooltip } from '../../styles/primitives/Tooltip';

export const CustomConnectButton = ({ children }: any) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
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
                  <Tooltip content="Connect wallet">
                    {React.cloneElement(children, {
                      onClick: openConnectModal,
                      type: 'button',
                    })}
                  </Tooltip>
                );
              }

              if (chain.unsupported) {
                return (
                  <Tooltip content="Connect wallet">
                    {React.cloneElement(children, {
                      onClick: openChainModal,
                      type: 'button',
                    })}
                  </Tooltip>
                );
              }

              return (
                <Tooltip content="Account">
                  {React.cloneElement(children, {
                    onClick: openAccountModal,
                    type: 'button',
                  })}
                </Tooltip>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
