import styled from "styled-components";

import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";

const ProjectsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 40px 0;
  max-width: 1200px;
  padding-bottom: 100px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #f0f0f0;
  position: sticky;
  top: 76px;
  z-index: 20;
  padding: 20px 0;
  width: 100%;
  text-align: center;
  backdrop-filter: blur(5px);
  border-radius: 0 0 16px 16px;
  
  span {
    color: #4db5ff;
  }
`;

const Grid = styled.div`
  gap: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title>
        Featured <span>Projects</span>
      </Title>
      <Grid>
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Grid>
    </ProjectsContainer>
  );
};

export default Projects;
