import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Link from 'next/link';
import React from 'react';
import { Container, globalStyles, lightTheme } from '../../stitches.config';
import { Header } from '../components/Header';
import { linkResolver, repositoryName } from '../services/prismic';

globalStyles();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme.className,
        dark: 'dark',
      }}
    >
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>{children}</a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Container>
            <Header />
            <Component {...pageProps} />
          </Container>
        </PrismicPreview>
      </PrismicProvider>
    </ThemeProvider>
  );
};

export default MyApp;
