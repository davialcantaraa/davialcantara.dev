import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import { Box, styled, Text } from '../../../stitches.config';

interface WritingCardProps {
  post: any;
}

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

export const WritingCard = ({ post }: WritingCardProps) => {
  return (
    <Link href={`/writing/${post.uid}`}>
      <CardContainer>
        <PrismicRichText
          field={post.data.title}
          components={{
            heading1: ({ children }) => <Text type="title">{children}</Text>,
          }}
        />
        <PrismicRichText
          field={post.data.subtitle}
          components={{
            heading3: ({ children }) => (
              <Text type="paragraph" css={{ color: '$baseGray' }}>
                {children}
              </Text>
            ),
          }}
        />
        <Time
          dateTime={prismicH.asDate(post.first_publication_date)?.toISOString()}
        >
          {prismicH
            .asDate(post.first_publication_date)
            ?.toLocaleDateString('en-US', {
              month: 'long',
              day: '2-digit',
              year: 'numeric',
            })}
        </Time>
        <HoverElement />
      </CardContainer>
    </Link>
  );
};
