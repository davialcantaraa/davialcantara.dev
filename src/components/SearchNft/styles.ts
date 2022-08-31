import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as SelectPrimitive from '@radix-ui/react-select';
import { styled } from '../../../stitches.config';

export const Label = styled(LabelPrimitive.Root, {
  flexShrink: 0,
});

export const SearchInput = styled('input', {
  appearance: 'none',
  outline: 'none',
  border: 'none',
  background: 'none',
  width: '100%',
  fontSize: '$2',
  fontWeight: 400,
  paddingTop: '$2',
  paddingBottom: '$2',
  paddingRight: '$2',
  paddingLeft: '$10',
  borderRadius: '$3',
});

export const Form = styled('form', {
  position: 'relative',
  background: '$semiDarkerGray',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$3',
  gap: '$2',
  input: {
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px var(--colors-baseGray)',
    },
    '&[data-invalid-address]': {
      boxShadow: 'inset 0px 0px 0px 1px var(--rk-colors-error)',
    },
  },
});

export const CustomSearchIcon = styled(MagnifyingGlassIcon, {
  size: '$6',
  color: '$primary',
  position: 'absolute',
  marginLeft: '$2',
});

export const SelectNetworkTrigger = styled(SelectPrimitive.Trigger, {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  padding: '$2',
  outline: 'none',
  borderRadius: '$2',
  '&:focus': {
    boxShadow: 'inset 0px 0px 0px 1px var(--colors-baseGray)',
  },
});
export const SelectNetworkIcon = styled(SelectPrimitive.Icon, {
  lineHeight: 0,
});

export const SelectNetworkContent = styled(SelectPrimitive.Content, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  background: '$semiDarkerGray',
  padding: '$1',
  borderRadius: '$2',
});
export const SelectNetworkViewport = styled(SelectPrimitive.Viewport, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
});
export const SelectNetworkItem = styled(SelectPrimitive.Item, {
  display: 'flex',
  gap: '$1',
  alignItems: 'center',
  padding: '$1',
  borderRadius: '$2',
  '&:hover': {
    background: '$darkGray',
  },
});

export const SelectNetworkItemText = SelectPrimitive.ItemText;
export const SelectNetwork = SelectPrimitive.Root;
export const SelectNetworkValue = SelectPrimitive.Value;
