import {
  AvatarIcon,
  HomeIcon,
  LetterCaseCapitalizeIcon,
  LightningBoltIcon,
  MoonIcon,
  SunIcon,
} from '@radix-ui/react-icons';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { Box, Icon, styled } from '../../../stitches.config.js';
import { useTheme } from '../../providers/themeProvider';
import { Tooltip } from '../../styles/Tooltip';

const Navbar = styled(ToolbarPrimitive.Root, {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
});

const NavbarGroup = styled(ToolbarPrimitive.ToggleGroup, {
  display: 'flex',
  gap: '$2',
});

const NavbarItem = styled(ToolbarPrimitive.ToggleItem, {
  padding: '$2',
  borderRadius: '$2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$primary',
  transition: '0.2s ease',
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
});

const NavbarButton = styled(ToolbarPrimitive.Button, NavbarItem, {});

const CustomHomeIcon = Icon(HomeIcon, {
  width: '$3-middle',
  height: '$3-middle',
});
const CustomLightningIcon = Icon(LightningBoltIcon, {
  width: '$3-middle',
  height: '$3-middle',
});
const CustomLetterIcon = Icon(LetterCaseCapitalizeIcon, {
  width: '$3-middle',
  height: '$3-middle',
});
const CustomMoonIcon = Icon(MoonIcon, {
  width: '$3-middle',
  height: '$3-middle',
});
const CustomSunIcon = Icon(SunIcon, {
  width: '$3-middle',
  height: '$3-middle',
});
const CustomAvatarIcon = Icon(AvatarIcon, {
  width: '$3-middle',
  height: '$3-middle',
});

export const Header = () => {
  const { isDarkTheme, setIsDarkTheme } = useTheme();
  return (
    <Box limit="md">
      <Navbar>
        <NavbarGroup type="multiple">
          <Tooltip content="Home">
            <NavbarItem value="aaa">
              <CustomHomeIcon />
            </NavbarItem>
          </Tooltip>
          <Tooltip content="Writing">
            <NavbarItem value="aaa">
              <CustomLetterIcon />
            </NavbarItem>
          </Tooltip>
          <Tooltip content="Projects">
            <NavbarItem value="aaa">
              <CustomLightningIcon />
            </NavbarItem>
          </Tooltip>
        </NavbarGroup>
        <NavbarGroup type="multiple">
          <Tooltip content="Switch theme">
            <NavbarButton
              onClick={() => setIsDarkTheme(prevState => !prevState)}
            >
              {isDarkTheme ? <CustomMoonIcon /> : <CustomSunIcon />}
            </NavbarButton>
          </Tooltip>
          <Tooltip content="Connect wallet">
            <NavbarItem value="aaa">
              <CustomAvatarIcon />
            </NavbarItem>
          </Tooltip>
        </NavbarGroup>
      </Navbar>
    </Box>
  );
};
