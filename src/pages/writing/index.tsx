import { Box, Text } from '../../../stitches.config';

const Writing = () => {
  return (
    <Box
      limit="md"
      css={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '$11 $10',
        gap: '$13',
      }}
    >
      <Text>Writing</Text>
    </Box>
  );
};

export default Writing;
