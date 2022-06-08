import * as prismicH from '@prismicio/helpers';
import Link from 'next/link';
import { Box, styled, Text } from '../../../stitches.config';
import { Time } from '../../styles/Time';
import { IPost } from '../../types/posts';

interface WritingCardProps {
  post: IPost;
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

export const WritingCard = ({ post }: WritingCardProps) => {
  console.log(post);
  return (
    <Link href={`/writing/${post.uid}`}>
      <CardContainer>
        <Text type="title">{post.title}</Text>
        <Text type="paragraph" css={{ color: '$baseGray' }}>
          {post.subtitle}
        </Text>
        <Time dateTime={prismicH.asDate(post.publicationDate)?.toISOString()}>
          {prismicH.asDate(post.publicationDate)?.toLocaleDateString('en-US', {
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
