import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import { GetServerSideProps } from 'next';
import { Box, Text } from '../../../stitches.config';
import { createClient } from '../../services/prismic';
import { Time } from '../../styles/Time';
import { VerticalBox } from '../../styles/VerticalBox';
import { IPost } from '../../types/posts';

interface PostProps {
  post: IPost;
}

const Post = ({ post }: PostProps) => {
  console.log(post);
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
      <VerticalBox>
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
            paragraph: ({ children }) => (
              <Text type="paragraph">{children}</Text>
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

  console.log(data);
  console.log(uid);

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
