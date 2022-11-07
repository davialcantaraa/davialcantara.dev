import * as PrismicH from '@prismicio/helpers';
import { GetStaticProps } from 'next';
import { Nothing } from '../../components/Nothing';
import { WritingCard } from '../../components/WritingCard';
import { createClient } from '../../services/prismic';
import { Box } from '../../styles/primitives/Box';
import { Text } from '../../styles/primitives/Text';
import { VerticalBox } from '../../styles/primitives/VerticalBox';
import { IPost } from '../../@types/posts';

interface WritingProps {
  posts: IPost[];
}

const Writing = ({ posts }: WritingProps) => {
  return (
    <Box variant="page">
      <VerticalBox as="header">
        <Text type="title">Writing</Text>
      </VerticalBox>
      <VerticalBox as="section">
        {posts.length ? (
          <>
            {posts.map((post: any) => (
              <WritingCard key={post.uid} post={post} />
            ))}
          </>
        ) : (
          <Nothing />
        )}
      </VerticalBox>
    </Box>
  );
};

export default Writing;

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const postsData = await client.getAllByType('writing');

  const posts = postsData.map(post => ({
    uid: post.uid,
    title: PrismicH.asText(post.data.title),
    subtitle: PrismicH.asText(post.data.subtitle),
    content: PrismicH.asHTML(post.data.content),
    publicationDate: post.first_publication_date,
  }));

  return {
    props: { posts },
  };
};
