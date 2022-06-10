import { InfoCircledIcon } from '@radix-ui/react-icons';
import { styled } from '../../../stitches.config';
import { Box } from '../../styles/primitives/Box';
import { Text } from '../../styles/primitives/Text';

const CustomInfoIcon = styled(InfoCircledIcon, {
  size: '$10',
});

export const Nothing = () => {
  return (
    <Box
      css={{
        justifyContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
        gap: '$3',
      }}
    >
      <CustomInfoIcon />
      <Text type="title" css={{ textAlign: 'left', lineHeight: 'initial' }}>
        It seems like there's nothing here...
      </Text>
    </Box>
  );
};
