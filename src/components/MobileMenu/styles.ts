import { grayA } from '@radix-ui/colors';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { CSS } from '@stitches/react';
import { Icon, keyframes, styled } from '../../../stitches.config';

export const MobileMenuNavbarItem = styled(ToolbarPrimitive.Link, {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderRadius: '$4',
  padding: '$3',
  gap: '$3',
  color: '$primary',
  fontSize: '$3',
  transition: '0.2s ease',
  '&:active': {
    transform: 'scale(0.90)',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 2px hsl(250, 43.0%, 48.0%)`,
  },
  '&.activeLink': {
    background: '$secondaryGradient',
  },
  '& + a': {
    marginTop: '$1',
  },
});

export const MobileMenuOverlay = styled(DialogPrimitive.Overlay, {
  background: grayA.grayA9,
  position: 'fixed',
  inset: 0,
});

export const MobileContentShow = keyframes({
  '0%': { transform: 'translateX(-100px)', opacity: 0 },
  '100%': { transform: 'translateX(0)', opacity: 1 },
});

export const MobileMenuContent = styled(DialogPrimitive.Content, {
  background: '$darkerGray',
  position: 'fixed',
  left: 0,
  top: 0,
  width: '50%',
  height: '100vh',
  padding: 15,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${MobileContentShow} 0.3s ease forwards`,
  },
  '&:focus': { outline: 'none' },
});

export const MobileMenuTitle = styled(DialogPrimitive.Title, {
  fontWeight: 500,
  fontSize: '$4',
  color: '$baseGray',
  margin: '0 0 $6 $3',
});

export const MobileMenuDivider = styled(ToolbarPrimitive.Separator, {
  width: '96%',
  height: 1,
  background: '$darkGray',
  opacity: 0.5,
  margin: '$9 auto',
});

export const MobileMenuClose = styled(DialogPrimitive.Close, {
  margin: '$4 0',
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
});

export const CustomCloseIcon = Icon(Cross2Icon, {
  color: '$primary',
  size: '$7',
} as CSS);

export const MobileMenuContainer = DialogPrimitive.Root;
export const MobileMenuTrigger = DialogPrimitive.Trigger;
export const MobileMenuNavbar = ToolbarPrimitive.Root;
export const MobileMenuPortal = DialogPrimitive.Portal;
export const MobileMenuNavbarButton = styled(
  ToolbarPrimitive.Button,
  MobileMenuNavbarItem,
);
