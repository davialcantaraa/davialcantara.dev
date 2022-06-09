import { violetA } from '@radix-ui/colors';
import {
  BackpackIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  HomeIcon,
  LightningBoltIcon,
  MoonIcon,
  Pencil1Icon,
  SunIcon,
  TokensIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { styled } from '../../../stitches.config';
import { Icon } from '../../styles/primitives/Icon';

export const Navbar = styled(ToolbarPrimitive.Root, {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
});

export const Divider = styled(ToolbarPrimitive.Separator, {
  width: 1,
  margin: '$2',
  background: '$darkGray',
});

export const NavbarGroup = styled('div', {
  display: 'flex',
  gap: '$2',
  color: 'white',
  '&[data-desktop-navbar]': {
    display: 'none',
    '@bp2': {
      display: 'flex',
    },
  },
  '&[data-mobile-menu]': {
    display: 'flex',
    alignItems: 'center',
    '@bp2': {
      display: 'none',
    },
  },
});

export const NavbarItem = styled(ToolbarPrimitive.Link, {
  padding: '$4',
  borderRadius: '$3',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$primary',
  transition: '$base',
  cursor: 'pointer',
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 1px ${violetA.violetA11}`,
  },
  '&:hover': {
    background: '$secondaryGradient',
  },
  '&:active': {
    transform: 'scale(0.85)',
  },
  '&.activeLink': {
    background: '$primaryGradient',
    boxShadow: `0 0 0 1px ${violetA.violetA11}`,
  },
});

export const NavbarButton = styled(ToolbarPrimitive.Button, NavbarItem);

export const CustomHomeIcon = Icon(HomeIcon, {
  size: '$6',
});
export const CustomLightningIcon = Icon(LightningBoltIcon, {
  size: '$6',
});
export const CustomLetterIcon = Icon(Pencil1Icon, {
  size: '$6',
});
export const CustomMoonIcon = Icon(MoonIcon, {
  size: '$6',
});
export const CustomSunIcon = Icon(SunIcon, {
  size: '$6',
});
export const CustomAvatarIcon = Icon(BackpackIcon, {
  size: '$6',
});

export const CustomGithubIcon = Icon(GitHubLogoIcon, {
  size: '$5',
});

export const CustomTwitterIcon = Icon(TwitterLogoIcon, {
  size: '$5',
});

export const CustomNFTIcon = Icon(TokensIcon, {
  size: '$6',
});

export const CustomMobileMenuIcon = Icon(HamburgerMenuIcon, {
  size: '$6',
  color: '$primary',
  margin: '$2 0',
});
