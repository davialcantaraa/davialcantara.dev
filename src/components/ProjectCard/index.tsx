import { ArrowSquareOut, GitBranch, GithubLogo, Star } from 'phosphor-react';
import { IRepo } from '../../@types/repositories';
import { Text } from '../../styles/primitives/Text';
import { Tooltip } from '../../styles/primitives/Tooltip';
import { Nothing } from '../Nothing';
import { CardContainer, HoverElement } from '../WritingCard/styles';
import { Toolbar, ToolbarDivider, ToolbarGroup, ToolbarLink } from './styles';

interface ProjectCardProps {
  repo: IRepo;
}

export const ProjectCard = ({ repo }: ProjectCardProps) => {
  return (
    <>
      {repo ? (
        <CardContainer>
          <Text type="title" as="h3">
            {repo.name}
          </Text>
          <Text type="paragraph" css={{ color: '$baseGray' }}>
            {repo.description}
          </Text>
          <Toolbar>
            <ToolbarGroup>
              <Tooltip content="Stars">
                <ToolbarLink
                  href={`https://github.com/divinurised/${repo.name}/stargazers`}
                  target="_blank"
                >
                  <Star />
                  <Text css={{ color: '$primary' }}>{repo.stars}</Text>
                </ToolbarLink>
              </Tooltip>
              <Tooltip content="Forks">
                <ToolbarLink
                  href={`https://github.com/divinurised/${repo.name}/network/members`}
                  target="_blank"
                >
                  <GitBranch />
                  <Text css={{ color: '$primary' }}>{repo.forks}</Text>
                </ToolbarLink>
              </Tooltip>
            </ToolbarGroup>
            <ToolbarDivider />
            <ToolbarGroup>
              <Tooltip content="Homepage">
                <ToolbarLink href={repo.productionUrl} target="_blank">
                  <ArrowSquareOut />
                </ToolbarLink>
              </Tooltip>
              <Tooltip content="Repository">
                <ToolbarLink href={repo.repositoryUrl} target="_blank">
                  <GithubLogo />
                </ToolbarLink>
              </Tooltip>
            </ToolbarGroup>
          </Toolbar>
          <HoverElement />
        </CardContainer>
      ) : (
        <Nothing />
      )}
    </>
  );
};
