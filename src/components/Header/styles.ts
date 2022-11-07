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

export const Navbar = styled(ToolbarPrimitive.Root, {
  display: 'flex',
  width: '100%',
  padding: '0 $10',
  maxWidth: '$md',
  margin: '0 auto',
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
    boxShadow: `0 0 0 2px ${violetA.violetA11}`,
  },
  '&:hover': {
    background: '$secondaryGradient',
  },
  '&:active': {
    transform: 'scale(0.85)',
  },
  '&.activeLink': {
    background: '$primaryGradient',
    boxShadow: `0 0 0 2px ${violetA.violetA11}`,
  },
  svg: {
    color: '$primary',
    size: '$6',
  },
});

export const NavbarButton = styled(ToolbarPrimitive.Button, NavbarItem);

export const CustomHomeIcon = styled(HomeIcon, {
  size: '$6',
});
export const CustomLightningIcon = styled(LightningBoltIcon, {
  size: '$6',
});
export const CustomLetterIcon = styled(Pencil1Icon, {
  size: '$6',
});
export const CustomMoonIcon = styled(MoonIcon, {
  size: '$6',
});
export const CustomSunIcon = styled(SunIcon, {
  size: '$6',
});
export const CustomAvatarIcon = styled(BackpackIcon, {
  size: '$6',
  color: '$primary',
});

export const CustomGithubIcon = styled(GitHubLogoIcon, {
  size: '$5',
});

export const CustomTwitterIcon = styled(TwitterLogoIcon, {
  size: '$5',
});

export const CustomNFTIcon = styled(TokensIcon, {
  size: '$6',
});

export const CustomMobileMenuIcon = styled(HamburgerMenuIcon, {
  size: '$6',
  color: '$primary',
  margin: '$2 0',
});
