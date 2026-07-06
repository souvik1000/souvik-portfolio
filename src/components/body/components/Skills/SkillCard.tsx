import { FC } from "react";
import styled from "styled-components";

interface SkillCardProps {
  topic: string;
  percentage: number;
  icon: any;
  color?: string;
}

const Card = styled.div`
  width: 160px;
  padding: 24px;
  display: flex;
  height: 160px;
  overflow: hidden;
  position: relative;
  align-items: center;
  border-radius: 12px;
  background: #1e1e1e;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #333;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    border-color: #555;
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    padding: 16px;
  }
`;

const IconWrapper = styled.div<{ color?: string }>`
  font-size: 48px;
  margin-bottom: 16px;
  transition: color 0.3s ease;
  color: ${({ color }) => color || "#ffffff"};

  ${Card}:hover & {
    color: #4db5ff;
  }
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #f0f0f0;
  text-align: center;
  margin: 0;
  margin-bottom: 8px;
  line-height: 1.4;
`;

const Percentage = styled.span`
  top: 12px;
  right: 12px;
  color: #aaa;
  font-size: 12px;
  font-weight: 500;
  position: absolute;
`;

const ProgressBar = styled.div<{ percentage: number }>`
  left: 0;
  bottom: 0;
  height: 4px;
  opacity: 0.8;
  position: absolute;
  background: #4db5ff;
  transition: width 1s ease-in-out;
  width: ${({ percentage }) => percentage}%;
  
  ${Card}:hover & {
    opacity: 1;
  }
`;

const SkillCard: FC<SkillCardProps> = ({ topic, percentage, icon: Icon, color }) => {
  return (
    <Card>
      <IconWrapper color={color}>
        {Icon && <Icon />}
      </IconWrapper>
      <Title>{topic}</Title>
      <Percentage>{percentage / 10}/10</Percentage>
      <ProgressBar percentage={percentage} />
    </Card>
  );
};

export default SkillCard;
