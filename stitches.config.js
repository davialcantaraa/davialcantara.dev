import {
  blue,
  gray,
  green,
  mintA,
  purpleA,
  red,
  slateA,
} from '@radix-ui/colors';
import { createStitches, globalCss } from '@stitches/react';
import {
  primaryGradient,
  secondaryGradient,
  tertiaryGradient,
} from './src/styles/colors';

export const globalStyles = globalCss({
  '*': { padding: 0, margin: 0, boxSizing: 'border-box' },
  'body, input, textarea, select, button': {
    font: "400 1rem 'Inter', apple-system, sans-serif",
    fontSmooth: 'antialiased',
  },
  button: {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: 'inherit',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  img: {
    pointerEvents: 'none',
    userSelect: 'none',
  },
  body: {
    transition: 'all 0.3s ease',
  },
  html: {
    '@media (max-width: 1080px)': {
      fontSize: '93.75%',
    },
    '@media (max-width: 720px)': {
      fontSize: '87.5%',
    },
  },
});

export const { styled, css, createTheme, keyframes } = createStitches({
  theme: {
    colors: {
      ...mintA,
      ...purpleA,
      ...slateA,
      ...gray,
      ...blue,
      ...red,
      ...green,
      primary: gray.gray5,
      secondary: gray.gray12,
      primaryGradient,
      secondaryGradient,
      tertiaryGradient,
    },
    fonts: {
      sans: 'Inter, sans-serif',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      '3-middle': '18px',
      4: '32px',
      5: '64px',
      6: '128px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      '3-middle': '18px',
      4: '32px',
      5: '64px',
      6: '128px',
      md: '768px',
    },
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      round: '9999px',
    },
    media: {
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {
      colors: '0.15s ease',
    },
  },
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    primary: gray.gray12,
    secondary: green.green1,
  },
});

export const Box = styled('div', {
  display: 'flex',
  variants: {
    limit: {
      md: {
        maxWidth: '$md',
        margin: '0 auto',
        padding: '$3',
      },
    },
  },
});

export const Text = styled('p', {
  color: '$primary',
});

export const Container = styled('div', {
  minWidth: '100vw',
  minHeight: '100vh',
  background: '$secondary',
  transition: '$colors',
});

export const Icon = (iconElement, css) => {
  const Icon = styled(iconElement, {
    ...css,
  });
  return Icon;
};
