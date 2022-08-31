import { styled } from '../../../stitches.config';

export const Box = styled('div', {
  display: 'flex',
  variants: {
    limit: {
      md: {
        maxWidth: '$md',
        margin: '0 auto',
      },
    },
    variant: {
      page: {
        maxWidth: '$md',
        margin: '0 auto',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '$10',
        gap: '$13',
      },
    },
  },
});
