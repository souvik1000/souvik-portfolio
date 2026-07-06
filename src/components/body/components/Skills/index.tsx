import { FC } from "react";
import styled from "styled-components";

import SkillCard from "./SkillCard";
import { getIcon } from "./SkillIcons";
import TechStackCard from "./TechStackCard";

interface SkillData {
    topic: string;
    percentage: number;
}

const mainSubjectList: SkillData[] = [
    { topic: "Frontend Architecture", percentage: 100 },
    { topic: "Performance Optimization", percentage: 100 },
    { topic: "React Ecosystem", percentage: 100 },
    { topic: "Quick RCA & Debugging", percentage: 100 },
    { topic: "AI Adaptibility", percentage: 80 },
    { topic: "DevOps & CI/CD Strategy", percentage: 90 },
    { topic: "Accessibility & Security", percentage: 85 },
    { topic: "Cross-team Collaboration", percentage: 100 },
    { topic: "Project Delivery Timeline", percentage: 95 },
    { topic: "Microfrontends & Scalability", percentage: 80 },
];

const otherSubjectList: SkillData[] = [
    { topic: "Technologies: React v19+, JS ES2023, Next.js, Express.js, TSX, HTML5, CSS3, Styled Component, SCSS", percentage: 100 },
    { topic: "State Management: React Hooks, Context API, Redux Toolkit, React Query, Zustand", percentage: 100 },
    { topic: "Version Control & DevOps: Git, GitHub, Azure DevOps, GitLab, Bitbucket, Confluence, Jira, Docker, AWS, CI/CD", percentage: 100 },
    { topic: "Testing Libraries: Jest, Vitest, Cypress, Enzyme, React Testing Library", percentage: 100 },
    { topic: "Backend, DB & Build Tools: Node.js, Postman, MongoDB, MySQL, Python, Vite, Webpack, Babel, Turbo, NPM, ESLint", percentage: 100 },
    { topic: "AI Tools: Antigravity, Claude Code, Gemini, Copilot, ChatGPT, Perplexity, Ollama, N8N", percentage: 100 },
];

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-height: 90vh;
  padding: 40px 20px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff; /* White title */
  margin-bottom: 32px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: #4db5ff;
    margin: 8px auto 0;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  max-width: 1150px;
  margin-bottom: 60px;
`;

const Skills: FC = () => {
    return (
        <Container>
            <SectionTitle>Core Competencies</SectionTitle>
            <Grid>
                {mainSubjectList.map((skill, index) => {
                    const Icon = getIcon(skill.topic);
                    return (
                        <SkillCard
                            key={index}
                            topic={skill.topic}
                            percentage={skill.percentage}
                            icon={Icon}
                        />
                    );
                })}
            </Grid>

            <SectionTitle>Technical Stack</SectionTitle>
            <Grid>
                {otherSubjectList.map((skill, index) => {
                    const parts = skill.topic.split(":");
                    const title = parts[0]?.trim() || skill.topic;
                    const itemsStr = parts[1] || "";
                    let skills: string[] = [];

                    if (itemsStr) {
                        skills = itemsStr.split(",").map(s => s.trim()).filter(s => s.length > 0);
                    } else {
                        skills = [skill.topic];
                    }

                    return (
                        <TechStackCard
                            key={index}
                            title={title}
                            skills={skills}
                        />
                    );
                })}
            </Grid>
        </Container>
    );
};

export default Skills;
