import { FC, useMemo } from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaGitlab,
} from "react-icons/fa";

import { ProjectData } from "./projectData";

const Card = styled.div`
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: rgba(30, 30, 30, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    background: rgba(30, 30, 30, 0.8);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #f0f0f0;
  margin: 0;
  line-height: 1.4;
`;

const DateRange = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 4px;
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  gap: 12px;
`;

const LinkIcon = styled.a`
  color: #aaa;
  font-size: 18px;
  transition: color 0.2s;

  &:hover {
    color: #4db5ff;
  }
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #ccc;
  margin: 0 0 20px 0;
  flex-grow: 1; /* Pushes content down to align footer if needed */
`;

const CodeHighlight = styled.code`
  background: rgba(77, 181, 255, 0.1);
  border: 1px solid rgba(77, 181, 255, 0.2);
  border-radius: 4px;
  padding: 2px 6px;
  font-family:
    source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  color: #4db5ff;
  font-size: 13px;
  font-weight: 600;
  margin: 0 2px;
`;

const TextHighlight = styled.span`
  color: #4db5ff;
  font-weight: 700;
`;

const Note = styled.div`
  background: rgba(255, 193, 7, 0.1);
  border: 1px solid rgba(255, 193, 7, 0.3);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  align-items: flex-start;
`;

const NoteIcon = styled.div`
  color: #ffc107;
  font-size: 16px;
  margin-top: 2px;
  flex-shrink: 0;
`;

const NoteText = styled.p`
  margin: 0;
  color: #ddd;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-line;
`;

const TechStack = styled.div`
  gap: 8px;
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
`;

const Chip = styled.span`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 4px 10px;
  font-size: 11px;
  color: #aaa;
  font-weight: 500;
  transition: all 0.2s;

  ${Card}:hover & {
    background: rgba(77, 181, 255, 0.1);
    border-color: rgba(77, 181, 255, 0.2);
    color: #4db5ff;
  }
`;

const ProjectCard: FC<ProjectData> = ({
  projectName,
  desciption,
  started,
  ended,
  techstackList,
  project,
  hosted,
  note,
}) => {
  const GithubIcon = FaGithub as any;
  const GitlabIcon = FaGitlab as any;
  const ExternalLinkIcon = FaExternalLinkAlt as any;
  const InfoIcon = FaInfoCircle as any;

  const isGitLab =
    project?.site === "GITLAB" || project?.url?.includes("gitlab.com");
  const SourceIcon = isGitLab ? GitlabIcon : GithubIcon;
  const sourceTitle = isGitLab
    ? "View Source on GitLab"
    : "View Source on GitHub";

  const parsedDescription = useMemo(() => {
    // Split first by backticks
    const backtickParts = desciption.split(/`([^`]+)`/g);

    return backtickParts.flatMap((part, index) => {
      if (index % 2 === 1) {
        return <CodeHighlight key={`code-${index}`}>{part}</CodeHighlight>;
      }

      // If it's normal text, split by double and single quotes
      const quoteParts = part.split(/["']([^"']+)["']/g);
      return quoteParts.map((qPart, qIndex) => {
        if (qIndex % 2 === 1) {
          return (
            <TextHighlight key={`text-${index}-${qIndex}`}>
              {qPart}
            </TextHighlight>
          );
        }
        return qPart;
      });
    });
  }, [desciption]);

  return (
    <Card>
      <Header>
        <div>
          <Title>{projectName}</Title>
          <DateRange>{`${started} - ${ended}`}</DateRange>
        </div>
        <Links>
          {project?.url && (
            <LinkIcon href={project.url} target="_blank" title={sourceTitle}>
              <SourceIcon />
            </LinkIcon>
          )}
          {hosted?.url && hosted.url !== "#" && (
            <LinkIcon href={hosted.url} target="_blank" title="View Live Demo">
              <ExternalLinkIcon size={16} />
            </LinkIcon>
          )}
        </Links>
      </Header>

      <Description>{parsedDescription}</Description>

      {note && (
        <Note>
          <NoteIcon>
            <InfoIcon />
          </NoteIcon>
          <NoteText>{note}</NoteText>
        </Note>
      )}

      <TechStack>
        {techstackList.map((tech, index) => (
          <Chip key={index}>{tech}</Chip>
        ))}
      </TechStack>
    </Card>
  );
};

export default ProjectCard;
