import {
  AvatarIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  HomeIcon,
  LetterCaseCapitalizeIcon,
  LightningBoltIcon,
  MoonIcon,
  SunIcon,
  TokensIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { Icon, styled } from '../../../stitches.config';

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
    boxShadow: `0 0 0 2px hsl(250, 43.0%, 48.0%)`,
  },
  '&:hover': {
    background: '$primaryGradient',
  },
  '&:active': {
    transform: 'scale(0.85)',
  },
  '&.activeLink': {
    background: '$secondaryGradient',
    boxShadow: `0 0 0 2px hsla(250, 43.0%, 48.0%, 0.4)`,
  },
});

export const NavbarButton = styled(ToolbarPrimitive.Button, NavbarItem);

export const CustomHomeIcon = Icon(HomeIcon, {
  size: '$7',
});
export const CustomLightningIcon = Icon(LightningBoltIcon, {
  size: '$7',
});
export const CustomLetterIcon = Icon(LetterCaseCapitalizeIcon, {
  size: '$7',
});
export const CustomMoonIcon = Icon(MoonIcon, {
  size: '$7',
});
export const CustomSunIcon = Icon(SunIcon, {
  size: '$7',
});
export const CustomAvatarIcon = Icon(AvatarIcon, {
  size: '$7',
});

export const CustomGithubIcon = Icon(GitHubLogoIcon, {
  size: '$6',
});

export const CustomTwitterIcon = Icon(TwitterLogoIcon, {
  size: '$6',
});

export const CustomNFTIcon = Icon(TokensIcon, {
  size: '$7',
});

export const CustomMobileMenuIcon = Icon(HamburgerMenuIcon, {
  size: '$7',
  color: '$primary',
  margin: '$2 0',
});
