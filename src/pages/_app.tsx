import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { Container, globalStyles, lightTheme } from '../../stitches.config';
import { Header } from '../components/Header';

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
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
};

export default MyApp;
