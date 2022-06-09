import { styled } from '../../../stitches.config';

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
