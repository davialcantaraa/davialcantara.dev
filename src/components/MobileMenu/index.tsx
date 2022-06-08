import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import {
  CustomGithubIcon,
  CustomHomeIcon,
  CustomLetterIcon,
  CustomLightningIcon,
  CustomMoonIcon,
  CustomNFTIcon,
  CustomSunIcon,
  CustomTwitterIcon,
} from '../Header/styles';
import {
  CustomCloseIcon,
  MobileMenuClose,
  MobileMenuContainer,
  MobileMenuContent,
  MobileMenuDivider,
  MobileMenuNavbar,
  MobileMenuNavbarButton,
  MobileMenuNavbarItem,
  MobileMenuOverlay,
  MobileMenuPortal,
  MobileMenuTitle,
  MobileMenuTrigger,
} from './styles';

export const MobileMenu = ({ children }: any) => {
  const { asPath } = useRouter();
  const { theme, setTheme } = useTheme();
  return (
    <nav>
      <MobileMenuContainer>
        <MobileMenuTrigger>{children}</MobileMenuTrigger>
        <MobileMenuPortal>
          <MobileMenuOverlay />
          <MobileMenuContent>
            <MobileMenuClose aria-label="Close">
              <CustomCloseIcon />
            </MobileMenuClose>
            <MobileMenuNavbar orientation="vertical">
              <MobileMenuTitle>Davi Alcântara</MobileMenuTitle>
              <Link href="/">
                <MobileMenuNavbarItem
                  className={asPath === '/' ? 'activeLink' : undefined}
                >
                  <CustomHomeIcon />
                  Homepage
                </MobileMenuNavbarItem>
              </Link>
              <Link href="/writing">
                <MobileMenuNavbarItem
                  className={asPath === '/writing' ? 'activeLink' : undefined}
                >
                  <CustomLetterIcon />
                  Writing
                </MobileMenuNavbarItem>
              </Link>
              <Link href="/projects">
                <MobileMenuNavbarItem
                  className={asPath === '/projects' ? 'activeLink' : undefined}
                >
                  <CustomLightningIcon />
                  Projects
                </MobileMenuNavbarItem>
              </Link>
              <Link href="/nfts">
                <MobileMenuNavbarItem
                  className={asPath === '/nfts' ? 'activeLink' : undefined}
                >
                  <CustomNFTIcon />
                  NFTs
                </MobileMenuNavbarItem>
              </Link>
              <MobileMenuDivider />
              <MobileMenuTitle>Social</MobileMenuTitle>
              <MobileMenuNavbarItem href="/" target="_blank" rel="noferrer">
                <CustomGithubIcon />
                Github
              </MobileMenuNavbarItem>
              <MobileMenuNavbarItem href="/" target="_blank" rel="noferrer">
                <CustomTwitterIcon />
                Twitter
              </MobileMenuNavbarItem>
              <MobileMenuDivider />
              <MobileMenuNavbarButton
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                {theme === 'light' ? (
                  <>
                    <CustomMoonIcon />
                    Light theme
                  </>
                ) : (
                  <>
                    <CustomSunIcon />
                    Dark theme
                  </>
                )}
              </MobileMenuNavbarButton>
            </MobileMenuNavbar>
          </MobileMenuContent>
        </MobileMenuPortal>
      </MobileMenuContainer>
    </nav>
  );
};
