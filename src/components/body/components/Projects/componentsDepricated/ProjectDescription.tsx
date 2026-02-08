import Stack from "src/utils/Stack";
import styled, { keyframes } from "styled-components";

const FadeInUp = keyframes`
	0% {
		transform:translateY(15px);
		opacity:0;
	}
	
	100% {
		transform:translateY(0px);
		opacity:1;
	}
`;

const ProjectWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  aligh-items: center;
  // background: #f3f3f3;
  background: rgba(243, 243, 243, 0.2);
  border-radius: 4px;
`;

const SectionContent = styled.div`
  width: 90%;
  margin: 45px 0px;
  animation: ${FadeInUp} 700ms ease 1;
  animation-fill-mode: forwards;
  transform: translateY(15px);

  h2 {
    font-size: 20px;
    text-transform: uppercase;
    color: #bfbfbf;
    margin: 0;
  }

  p {
    text-align: justify;
    font-size: 16px;
    line-height: 1.8em;
    color: #a6a6a6;
  }

  p span {
    font-weight: bold;
    margin-right: 4px;
  }

  &.active {
    display: block;
  }
`;

const DateAndLink = styled.div`
  p {
    font-size: 12px;
    font-width: 600;
  }
`;

interface IProps {
  ended: string;
  started: string;
  projectName: string;
  techstackList: string[];
  hosted?: {
    url: string;
  };
  desciption?: string;
  project?: {
    url: string;
    site: "GITHUB" | "CODESANDBOX";
  };
}

const ProjectDescription: React.FC<IProps> = ({
  projectName,
  techstackList,
  desciption,
  started,
  ended,
  hosted,
  project,
}) => {
  return (
    <ProjectWrapper>
      <SectionContent>
        <h2>{projectName}</h2>
        <DateAndLink
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>{`${started} - ${ended}`}</p>
          <Stack margin={12}>
            {project && (
              <a href={project.url || "#"} target="_blank">
                <img loading="lazy" src="github.svg" alt="Github Icon" />
              </a>
            )}
            {hosted && (
              <a href={hosted.url || "#"} target="_blank">
                <img loading="lazy" src="link.svg" alt="Link Icon" />
              </a>
            )}
          </Stack>
        </DateAndLink>
        <p>{desciption}</p>
        <p>
          <span>Tech-stack:</span>
          {`${techstackList.join(",")}`}
        </p>
      </SectionContent>
    </ProjectWrapper>
  );
};

export default ProjectDescription;
