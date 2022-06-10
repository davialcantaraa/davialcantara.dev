import {
  CommitIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  StarIcon,
} from '@radix-ui/react-icons';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { styled } from '../../../stitches.config';
import { Box } from '../../styles/primitives/Box';

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

export const CustomStartIcon = styled(StarIcon, {
  size: '$6',
});
export const CustomCommitIcon = styled(CommitIcon, {
  size: '$6',
});
export const CustomExternalLinkIcon = styled(ExternalLinkIcon, {
  size: '$6',
});
export const CustomGitHubLogoIcon = styled(GitHubLogoIcon, {
  size: '$6',
});
