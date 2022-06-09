import { GetStaticProps } from 'next';
import { styled } from '../../../stitches.config';
import { Nothing } from '../../components/Nothing';
import { ProjectCard } from '../../components/ProjectCard';
import { githubApi } from '../../services/axios';
import { Box } from '../../styles/primitives/Box';
import { Text } from '../../styles/primitives/Text';
import { VerticalBox } from '../../styles/primitives/VerticalBox';
import { IRepo } from '../../types/repositories';
import { projects } from '../../utils/projects';

interface ProjectProps {
  repos: IRepo[];
}

export const HoverElement = styled('div', {
  opacity: 0,
  visibility: 'hidden',
  position: 'absolute',
  padding: '$8 $4',
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

const Projects = ({ repos }: ProjectProps) => {
  console.log(repos);
  return (
    <Box
      limit="md"
      css={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '$10',
        gap: '$13',
      }}
    >
      <VerticalBox as="section">
        <Text type="title">Projects</Text>
        <Text type="paragraph">My own creations</Text>
      </VerticalBox>
      <VerticalBox as="section">
        {repos.length ? (
          <>
            {repos.map(repo => (
              <ProjectCard key={repo.name} repo={repo} />
            ))}
          </>
        ) : (
          <Nothing />
        )}
      </VerticalBox>
      <Text
        as="a"
        type="title"
        href="https://github.com/divinurised"
        css={{
          position: 'relative',
          transition: '$base',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '$4',
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
    </Box>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  let response: any = [];

  for await (const project of projects) {
    const { data }: any = await githubApi.get(`/repos/divinurised/${project}`);
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
    props: {
      repos: repos,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
