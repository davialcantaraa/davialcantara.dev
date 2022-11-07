import * as prismicH from '@prismicio/helpers';
import Link from 'next/link';
import { Text } from '../../styles/primitives/Text';
import { Time } from '../../styles/primitives/Time';
import { IPost } from '../../@types/posts';
import { Nothing } from '../Nothing';
import { CardContainer, HoverElement } from './styles';

interface WritingCardProps {
  post: IPost;
}

export const WritingCard = ({ post }: WritingCardProps) => {
  return (
    <>
      {post ? (
        <Link href={`/writing/${post.uid}`}>
          <CardContainer>
            <Text type="title">{post.title}</Text>
            <Text type="paragraph" css={{ color: '$baseGray' }}>
              {post.subtitle}
            </Text>
            <Time
              dateTime={prismicH.asDate(post.publicationDate)?.toISOString()}
            >
              {prismicH
                .asDate(post.publicationDate)
                ?.toLocaleDateString('en-US', {
                  month: 'long',
                  day: '2-digit',
                  year: 'numeric',
                })}
            </Time>
            <HoverElement />
          </CardContainer>
        </Link>
      ) : (
        <Nothing />
      )}
    </>
  );
};
