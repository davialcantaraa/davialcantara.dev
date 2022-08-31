import { purpleA } from '@radix-ui/colors';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { styled } from '../../../stitches.config';

export const Tab = TabsPrimitive.Root;

export const TabList = styled(TabsPrimitive.List, {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});
export const TabTrigger = styled(TabsPrimitive.Trigger, {
  width: '50%',
  padding: '$2',
  background: '$secondary',
  transition: '$base',
  '&[data-state="inactive"]': {
    '&:hover': {
      background: '$darkerGray',
    },
  },
  '&[data-state="active"]': {
    background: '$semiDarkerGray',
    borderBottom: `2px solid ${purpleA.purpleA11}`,
  },
});
export const TabContent = styled(TabsPrimitive.Content, {
  margin: '$10 0',
});
