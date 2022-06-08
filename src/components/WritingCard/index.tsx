import { Box, styled, Text } from '../../../stitches.config';

const HoverElement = styled('div', {
  opacity: 0,
  visibility: 'hidden',
  position: 'absolute',
  width: '100%',
  height: '100%',
  padding: '$8',
  boxSizing: 'content-box',
  alignSelf: 'center',
  borderRadius: '$6',
  background: '$primaryGradientA',
  transform: 'scaleX(0.95)',
  transition: 'all 0.2s ease',
});

const CardContainer = styled(Box, {
  flexDirection: 'column',
  position: 'relative',
  gap: '$3',
  width: '100%',
  justifyContent: 'center',
  borderRadius: '$3',
  transition: '$base',
  '&:hover': {
    [`& ${HoverElement}`]: {
      opacity: 1,
      transform: 'scaleX(1)',
      visibility: 'visible',
    },
  },
  [`& + ${Box}`]: {
    marginTop: '$11',
  },
});

const Time = styled('time', {
  color: '$darkGray',
});

export const WritingCard = () => {
  return (
    <>
      <CardContainer>
        <Text type="title">"Connect Wallet" button, but better 🌈 🧰</Text>
        <Text type="paragraph" css={{ color: '$baseGray' }}>
          The best way to connect a wallet
        </Text>
        <Time>May 12, 2022</Time>
        <HoverElement />
      </CardContainer>
    </>
  );
};
