import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box } from '../../styles/primitives/Box';
import { Tooltip } from '../../styles/primitives/Tooltip';
import { CustomConnectButton } from '../CustomConnectButton';
import { MobileMenu } from '../MobileMenu/index';
import {
  CustomAvatarIcon,
  CustomGithubIcon,
  CustomHomeIcon,
  CustomLetterIcon,
  CustomLightningIcon,
  CustomMobileMenuIcon,
  CustomMoonIcon,
  CustomNFTIcon,
  CustomSunIcon,
  CustomTwitterIcon,
  Divider,
  Navbar,
  NavbarButton,
  NavbarGroup,
  NavbarItem,
} from './styles';

export const Header = () => {
  const { setTheme, theme } = useTheme();
  const { asPath } = useRouter();
  return (
    <Box
      css={{
        padding: '$9 $10',
        position: 'sticky',
        top: 0,
        width: '100%',
        background: '$secondaryA',
        zIndex: 4,
        backdropFilter: 'blur(2px)',
      }}
    >
      <Navbar>
        <NavbarGroup data-mobile-menu>
          <MobileMenu>
            <CustomMobileMenuIcon />
          </MobileMenu>
        </NavbarGroup>
        <NavbarGroup data-desktop-navbar>
          <Tooltip content="Home" isAsChild={false}>
            <Link href="/">
              <NavbarItem className={asPath === '/' ? 'activeLink' : undefined}>
                <CustomHomeIcon />
              </NavbarItem>
            </Link>
          </Tooltip>
          <Tooltip content="Writing" isAsChild={false}>
            <Link href="/writing">
              <NavbarItem
                className={asPath === '/writing' ? 'activeLink' : undefined}
              >
                <CustomLetterIcon />
              </NavbarItem>
            </Link>
          </Tooltip>
          <Tooltip content="Projects" isAsChild={false}>
            <Link href="/projects">
              <NavbarItem
                className={asPath === '/projects' ? 'activeLink' : undefined}
              >
                <CustomLightningIcon />
              </NavbarItem>
            </Link>
          </Tooltip>
          <Tooltip content="NFTs" isAsChild={false}>
            <Link href="/nfts">
              <NavbarItem
                className={asPath === '/nfts' ? 'activeLink' : undefined}
              >
                <CustomNFTIcon />
              </NavbarItem>
            </Link>
          </Tooltip>
          <Divider />
          <Tooltip content="Github">
            <NavbarItem href="https://twitter.com" target="_blank">
              <CustomGithubIcon />
            </NavbarItem>
          </Tooltip>
          <Tooltip content="Twitter">
            <NavbarItem href="https://twitter.com" target="_blank">
              <CustomTwitterIcon />
            </NavbarItem>
          </Tooltip>
        </NavbarGroup>
        <NavbarGroup>
          <Tooltip content="Switch theme">
            <NavbarButton
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              css={{
                display: 'none',
                '@bp2': {
                  display: 'flex',
                },
              }}
            >
              {theme === 'light' ? <CustomMoonIcon /> : <CustomSunIcon />}
            </NavbarButton>
          </Tooltip>
          <CustomConnectButton>
            <NavbarButton>
              <CustomAvatarIcon />
            </NavbarButton>
          </CustomConnectButton>
        </NavbarGroup>
      </Navbar>
    </Box>
  );
};
