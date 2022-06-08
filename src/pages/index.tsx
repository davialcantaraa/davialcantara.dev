import type { GetStaticProps, NextPage } from 'next';
import { Box, styled, Text } from '../../stitches.config';
import { CustomLetterIcon } from '../components/Header/styles';
import { WritingCard } from '../components/WritingCard/index';
import { createClient } from '../services/prismic';

const ResumeTitle = styled(Text, {
  cursor: 'help',
});

const CategoryTitle = styled(Text, {
  marginBottom: '$10',
  display: 'flex',
  alignItems: 'center',
  [`& ${CustomLetterIcon}`]: {
    marginRight: '$2',
  },
});

const MainSection = styled('main', {
  display: 'flex',
  flexDirection: 'column',
});

const HeroSection = styled('div');

const Home: NextPage<any> = ({ posts }) => {
  return (
    <Box
      css={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '$11 $10',
        gap: '$13',
      }}
    >
      <HeroSection>
        <ResumeTitle type="title">Davi Alcântara</ResumeTitle>
        <Text type="paragraph" css={{ marginTop: '$4' }}>
          I'm Front-end developer and major Software Engineering student. I love
          the ReactJS ecosystem and the latest libraries.
        </Text>
      </HeroSection>
      <MainSection>
        <CategoryTitle type="title">
          <CustomLetterIcon />
          Writing
        </CategoryTitle>
        {posts.map((post: any) => (
          <WritingCard key={post.id} post={post} />
        ))}
      </MainSection>
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const posts = await client.getAllByType('writing');

  return {
    props: { posts },
  };
};
