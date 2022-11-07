import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';
import { styled } from '../../../stitches.config';

export const Code = styled('code', {
  width: '100%',
  color: '$primary',
  fontFamily: '$mono',
  fontSize: '$2',
  display: 'flex',
  gap: '$2',
  alignItems: 'center',
  background: '$semiDarkerGray',
  borderRadius: '$3',
  padding: '$1',
  cursor: 'default',
  svg: {
    color: '$primary',
    size: '$6',
  },
});

export const CustomCopyIcon = styled(CopyIcon, {
  size: '$5',
});

export const CustomCheckIcon = styled(CheckIcon, {
  size: '$5',
});
