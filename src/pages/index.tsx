import * as PrismicH from '@prismicio/helpers';
import type { GetServerSideProps, NextPage } from 'next';
import { CustomLetterIcon } from '../components/Header/styles';
import { Nothing } from '../components/Nothing';
import { WritingCard } from '../components/WritingCard/index';
import { createClient } from '../services/prismic';
import { Box } from '../styles/primitives/Box';
import { Text } from '../styles/primitives/Text';
import { VerticalBox } from '../styles/primitives/VerticalBox';

const Home: NextPage<any> = ({ posts }) => {
  return (
    <Box variant="page">
      <VerticalBox>
        <Text as="h1" type="title" css={{ cursor: 'help' }}>
          Davi Alcântara
        </Text>
        <Text type="paragraph" css={{ marginTop: '$4' }}>
          I'm Front-end developer and major Software Engineering student. I love
          the ReactJS ecosystem and the latest libraries.
        </Text>
      </VerticalBox>
      <VerticalBox as="main">
        <Text
          type="title"
          css={{
            marginBottom: '$10',
            display: 'flex',
            alignItems: 'center',
            [`& ${CustomLetterIcon}`]: {
              marginRight: '$2',
            },
          }}
        >
          <CustomLetterIcon />
          Writing
        </Text>
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

export default Home;

export const getServerSideProps: GetServerSideProps = async ({
  previewData,
}) => {
  const client = createClient({ previewData });

  const postsData = await client.getAllByType('writing', {
    limit: 3,
  });

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
