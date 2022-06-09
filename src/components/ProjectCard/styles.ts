import {
  CommitIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  StarIcon,
} from '@radix-ui/react-icons';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { styled } from '../../../stitches.config';
import { Box } from '../../styles/primitives/Box';
import { Icon } from '../../styles/primitives/Icon';

export const Toolbar = styled(ToolbarPrimitive.Root, {
  display: 'flex',
  width: 'auto',
  justifyContent: 'flex-start',
  color: '$primary',
  zIndex: 1,
});
export const ToolbarGroup = styled(Box, {
  alignItems: 'center',
  gap: '$5',
});
export const ToolbarLink = styled(ToolbarPrimitive.Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
});

export const ToolbarDivider = styled('div', {
  width: 1,
  background: '$baseGray',
  height: 'auto',
  margin: '0 $6',
});

export const CustomStartIcon = Icon(StarIcon, {
  size: '$6',
});
export const CustomCommitIcon = Icon(CommitIcon, {
  size: '$6',
});
export const CustomExternalLinkIcon = Icon(ExternalLinkIcon, {
  size: '$6',
});
export const CustomGitHubLogoIcon = Icon(GitHubLogoIcon, {
  size: '$6',
});
