import * as PrismicH from '@prismicio/helpers';
import { purple } from '@radix-ui/colors';
import type { GetServerSideProps, NextPage } from 'next';
import { Lightning, PencilSimple } from 'phosphor-react';
import { styled } from '../../stitches.config';
import { Nothing } from '../components/Nothing';
import { ProjectCard } from '../components/ProjectCard';
import { WritingCard } from '../components/WritingCard/index';
import { githubApi } from '../services/axios';
import { createClient } from '../services/prismic';
import { Box } from '../styles/primitives/Box';
import { Text } from '../styles/primitives/Text';
import { VerticalBox } from '../styles/primitives/VerticalBox';
import { projects } from '../utils/projects';

export const HoverElement = styled('div', {
  opacity: 0,
  visibility: 'hidden',
  position: 'absolute',
  padding: '$8',
  width: '100%',
  height: '100%',
  boxSizing: 'content-box',
  alignSelf: 'center',
  borderRadius: '$6',
  background: '$primaryGradientA',
  transform: 'scaleX(0.95)',
  transition: 'all 0.2s ease',
  zIndex: 0,
});

const Home: NextPage<any> = ({ posts, repos }) => {
  console.log(repos);
  return (
    <Box variant="page">
      <VerticalBox>
        <Text as="h1" type="title" css={{ cursor: 'help' }}>
          Davi Alcântara
        </Text>
        <Text type="paragraph" css={{ marginTop: '$4' }}>
          Hey! I'm Davi Alcântara, a Software Engineer and major Software
          Engineering student. Based in Brazil.
        </Text>
        <Text type="paragraph" css={{ marginTop: '$4' }}>
          Interested in design system, DX and Web3.
        </Text>
      </VerticalBox>
      <VerticalBox as="main">
        <Box css={{ display: 'block' }}>
          <Text
            type="title"
            css={{
              marginBottom: '$10',
              display: 'flex',
              alignItems: 'center',
              svg: {
                marginRight: '$2',
                size: '$6',
                color: '$primary',
              },
            }}
          >
            <PencilSimple />
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
        </Box>
        <Box css={{ display: 'block', marginTop: '$12' }}>
          <Text
            type="title"
            css={{
              marginBottom: '$10',
              display: 'flex',
              alignItems: 'center',
              svg: {
                marginRight: '$2',
                size: '$6',
                color: '$primary',
              },
            }}
          >
            <Lightning />
            Projects
          </Text>
          {repos.length ? (
            <>
              {repos.map((repo: any) => (
                <ProjectCard key={repo.name} repo={repo} />
              ))}
            </>
          ) : (
            <Nothing />
          )}
        </Box>
        <Text
          as="a"
          type="title"
          href="https://github.com/divinurised"
          tabIndex={0}
          css={{
            position: 'relative',
            transition: '$base',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '$4',
            marginTop: '$12',
            outlineWidth: 0,
            '&:focus-visible': {
              [`& ${HoverElement}`]: {
                outline: `2px solid ${purple.purple9}`,
              },
            },
            '&:hover': {
              [`& ${HoverElement}`]: {
                opacity: 1,
                transform: 'scaleX(1)',
                visibility: 'visible',
              },
            },
          }}
        >
          See more...
          <HoverElement />
        </Text>
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

  let response: any = [];

  for await (const project of projects) {
    const { data }: any = await githubApi.get(`/repos/davialc/${project}`);
    response.push(data);
  }

  const repos = await Promise.all(
    response.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      productionUrl: repo.homepage,
      repositoryUrl: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
    })),
  );

  return {
    props: { posts, repos },
  };
};
