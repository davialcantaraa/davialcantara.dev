import { purple } from '@radix-ui/colors';
import * as Accordion from '@radix-ui/react-accordion';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from '@radix-ui/react-icons';
import { keyframes, styled } from '../../../stitches.config';
import { Text } from '../../styles/primitives/Text';

export const CardHeader = Accordion.Header;
export const CardContainer = Accordion.Root;

export const HoverElement = styled('div', {
  opacity: 0,
  visibility: 'hidden',
  position: 'absolute',
  width: '100%',
  height: '100%',
  padding: '$2',
  boxSizing: 'content-box',
  alignSelf: 'center',
  borderRadius: '$6',
  background: '$primaryGradientA',
  transform: 'scaleX(0.95)',
  transition: 'all 0.2s ease',
  zIndex: 0,
});

export const CardItem = styled(Accordion.Item, {
  marginLeft: -8,
  [`& + [data-nft-card]`]: {
    marginTop: '$1',
  },
  button: {
    transition: 'all 0.2s ease',
    outlineColor: 'transparent',
    '&:focus-visible': {
      outline: `2px solid ${purple.purple9}`,
      outlineOffset: '6px',
      borderRadius: '$2',
    },
  },
});

export const CardTrigger = styled(Accordion.Trigger, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '$2',
  width: '100%',

  '&:hover': {
    [`& ${HoverElement}`]: {
      opacity: 1,
      transform: 'scaleX(1)',
      visibility: 'visible',
    },
  },

  '&[data-state="open"]': {
    '&[data-preview]': {
      visibility: 'invisible',
    },
  },
});

export const CardContent = styled(Accordion.Content, {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$6',
  '&[data-state="open"]': {
    padding: '$2',
  },
});

export const NftContainer = styled('div', {
  display: 'grid',
  height: '100%',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$8',
});

export const skeletonLoader = keyframes({
  '0%': { background: '$darkGray' },
  '50%': { background: '$lightGray' },
  '100%': { background: '$darkGray' },
});

export const CustomExternalLinkIcon = styled(ExternalLinkIcon, {
  size: '$6',
});

export const CustomChevronRightIcon = styled(ChevronRightIcon, {
  size: '$6',
  marginLeft: -5,
});

export const CustomChevronDownIcon = styled(ChevronDownIcon, {
  size: '$6',
});

export const NftText = styled(Text, {
  fontWeight: 500,
  display: 'flex',
  gap: '$1',
  alignItems: 'center',
  lineHeight: 2.5,
});
