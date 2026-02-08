import styled from "styled-components";

import ExperienceCard from "./ExperienceCard";
import { experienceList } from "./experienceData";

const ExperienceContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  backdrop-filter: blur(5px);
  text-align: center;
  border-radius: 0 0 16px 16px;

  &:after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background: #4db5ff;
    margin: 16px auto 0;
    border-radius: 2px;
  }
`;

const TimelineWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: rgba(77, 181, 255, 0.2);
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    padding-left: 20px;

    &:before {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
  position: relative;
`;

const Dot = styled.div`
  width: 16px;
  height: 16px;
  background: #4db5ff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 24px;
  transform: translateX(-50%);
  z-index: 2;
  box-shadow: 0 0 0 4px rgba(10, 25, 47, 1);

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const ContentWrapper = styled.div<{ align: 'left' | 'right' }>`
  width: 45%;
  ${props => props.align === 'left' ?
    'margin-right: auto; display: flex; justify-content: flex-end;' :
    'margin-left: auto; display: flex; justify-content: flex-start;'
  }
  
  @media (max-width: 768px) {
    width: 90%;
    margin-left: 0;
    margin-right: 0;
    padding-right: 0;
    padding-left: 50px;
    justify-content: flex-start;
  }
`;

const ExperienceV2 = () => {
  return (
    <ExperienceContainer>
      <Title>Experience</Title>
      <TimelineWrapper>
        {experienceList.map((data, index) => (
          <TimelineItem key={index}>
            <Dot />
            <ContentWrapper align={index % 2 === 0 ? 'left' : 'right'}>
              <ExperienceCard {...data} />
            </ContentWrapper>
          </TimelineItem>
        ))}
      </TimelineWrapper>
    </ExperienceContainer>
  );
};

export default ExperienceV2;
