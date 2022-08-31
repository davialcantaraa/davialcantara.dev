import '@rainbow-me/rainbowkit/styles.css';
import { AppProps } from 'next/app';
import { globalStyles } from '../../stitches.config';
import { Header } from '../components/Header';
import { Container } from '../styles/primitives/Container';
import { Providers } from './_providers';

globalStyles();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </Providers>
  );
};

export default MyApp;
