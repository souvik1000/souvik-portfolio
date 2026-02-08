import { FC } from "react";

import { getIcon } from "./SkillIcons";
import { Card, IconWrapper, SkillItem, SkillName, SkillsGrid, Title } from "./skillStyles";

interface TechStackCardProps {
  title: string;
  skills: string[];
}

const TechStackCard: FC<TechStackCardProps> = ({ title, skills }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <SkillsGrid>
        {skills.map((skill, index) => {
          const cleanSkill = skill.trim();
          const Icon = getIcon(cleanSkill);
          const AnyIcon = Icon as any;
          return (
            <SkillItem key={index} title={cleanSkill}>
              <IconWrapper>
                <AnyIcon />
              </IconWrapper>
              <SkillName>{cleanSkill}</SkillName>
            </SkillItem>
          );
        })}
      </SkillsGrid>
    </Card>
  );
};

export default TechStackCard;
