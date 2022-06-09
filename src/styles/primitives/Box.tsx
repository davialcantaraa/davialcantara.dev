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
  },
});
