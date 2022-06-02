import type { AppProps } from 'next/app';
import { globalStyles } from '../../stitches.config.js';
import { Header } from '../components/Header/index';
import { ThemeProvider } from '../providers/themeProvider';

globalStyles();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
