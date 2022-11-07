import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import { GetServerSideProps } from 'next';
import { createClient } from '../../services/prismic';
import { Box } from '../../styles/primitives/Box';
import { Text } from '../../styles/primitives/Text';
import { Time } from '../../styles/primitives/Time';
import { VerticalBox } from '../../styles/primitives/VerticalBox';
import { IPost } from '../../@types/posts';
import { styled } from '../../../stitches.config';

interface PostProps {
  post: IPost;
}

const StyledImage = styled('img', {
  boxSizing: 'border-box',
  borderRadius: '$6',
});

const StyledCode = styled('pre');

const Post = ({ post }: PostProps) => {
  return (
    <Box
      limit="md"
      css={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '$10',
        gap: '$11',
      }}
    >
      <VerticalBox as="header">
        <Text type="largeTitle">{post.title}</Text>
        <Text type="title" css={{ color: '$baseGray' }}>
          {post.subtitle}
        </Text>
        <Time dateTime={prismicH.asDate(post.publicationDate)?.toISOString()}>
          {prismicH.asDate(post.publicationDate)?.toLocaleDateString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
          })}
        </Time>
      </VerticalBox>
      <VerticalBox>
        <PrismicRichText
          field={post.content}
          components={{
            paragraph: ({ children }: any) => (
              <Text type="paragraph" css={{ margin: '$4 0' }}>
                {children}
              </Text>
            ),
            image: ({ node: { url } }: any) => (
              <>
                <StyledImage src={url} />
              </>
            ),
            preformatted: ({ children }: any) => (
              <StyledCode css={{ margin: '$4 0' }}>{children}</StyledCode>
            ),
          }}
        />
      </VerticalBox>
    </Box>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({
  params,
  previewData,
}: any) => {
  const client = createClient({ previewData });
  const { data, first_publication_date, uid } = await client.getByUID(
    'writing',
    params.uid,
  );

  const post = {
    uid,
    title: prismicH.asText(data.title),
    subtitle: prismicH.asText(data.subtitle),
    content: data.content,
    publicationDate: first_publication_date,
  };

  return {
    props: {
      post,
    },
  };
};
