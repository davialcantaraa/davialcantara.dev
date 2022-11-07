import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { ThemeProvider } from 'next-themes';
import Link from 'next/link';
import React from 'react';
import { WagmiConfig } from 'wagmi';
import { lightTheme } from '../../stitches.config';
import { linkResolver, repositoryName } from '../services/prismic';
import { chains, wagmiClient } from '../services/rainbowkit';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme.className,
        dark: 'dark',
      }}
    >
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <PrismicProvider
            linkResolver={linkResolver}
            internalLinkComponent={({ href, children, ...props }) => (
              <Link href={href}>
                <a {...props}>{children}</a>
              </Link>
            )}
          >
            <PrismicPreview repositoryName={repositoryName}>
              {children}
            </PrismicPreview>
          </PrismicProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
};

export default Providers;
