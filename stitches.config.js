import { mauve, mauveDark } from '@radix-ui/colors';
import { createStitches, globalCss } from '@stitches/react';
import {
  primaryGradient,
  primaryGradientA,
  primaryRadialA,
  secondaryGradient,
  tertiaryGradient,
} from './src/styles/colors';

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  'body, input, textarea, select, button': {
    font: "400 1rem 'Noto Sans', apple-system, sans-serif",
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
      primary: mauve.mauve7,
      secondary: mauveDark.mauve1,

      lightGray: mauve.mauve5,
      baseGray: mauve.mauve9,
      darkGray: mauve.mauve11,
      darkerGray: mauveDark.mauve2,

      primaryGradient,
      primaryGradientA,
      secondaryGradient,
      tertiaryGradient,

      primaryRadialA,
    },
    fonts: {
      sans: 'Inter, sans-serif',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '20px',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '10px',
      4: '12px',
      5: '14px',
      6: '16px',
      7: '18px',
      8: '20px',
      9: '24px',
      10: '32px',
      11: '48px',
      12: '56px',
      13: '64px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '10px',
      4: '12px',
      5: '14px',
      6: '16px',
      7: '18px',
      8: '20px',
      9: '24px',
      10: '32px',
      11: '48px',
      12: '56px',
      13: '64px',
      md: '768px',
    },
    radii: {
      1: '2px',
      2: '4px',
      3: '6px',
      4: '8px',
      5: '10px',
      6: '12px',
      round: '9999px',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {
      base: '0.15s ease',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  utils: {
    size: value => ({
      width: value,
      height: value,
    }),
  },
});

export const lightTheme = createTheme('light-theme', {
  colors: {
    primary: mauveDark.mauve1,
    secondary: mauveDark.mauve12,

    lightGray: mauveDark.mauve5,
    baseGray: mauveDark.mauve8,
    darkGray: mauveDark.mauve10,
    darkerGray: mauve.mauve3,
  },
});

export const Box = styled('div', {
  display: 'flex',
  variants: {
    limit: {
      md: {
        maxWidth: '$md',
        margin: '0 auto',
      },
    },
  },
  defaultVariants: {
    limit: 'md',
  },
});

export const Text = styled('p', {
  color: '$primary',
  lineHeight: 1.8,
  variants: {
    type: {
      paragraph: {
        fontSize: '$3',
      },
      title: {
        fontWeight: 500,
        fontSize: '$4',
      },
      largeTitle: {
        fontWeight: 500,
        fontSize: '$5',
      },
    },
  },
});

export const Container = styled('div', {
  minWidth: '100vw',
  minHeight: '100vh',
  backgroundColor: '$secondary',
  backgroundImage: '$primaryRadialA',
  transition: '$base',
});

// export const RadialGradientContainer = styled('div', {
//   background: '$primaryRadialA',
//   position: 'absolute',
// });

export const Icon = (iconElement, css) => {
  const Icon = styled(iconElement, {
    ...css,
  });
  return Icon;
};

export const standartCubicBezier = 'cubic-bezier(.69,.13,.37,.89)';
