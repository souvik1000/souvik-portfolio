import styled from "styled-components";

const Card = styled.div`
  background: #1e1e1e;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  width: 350px;
  flex: 1 1 300px;
  max-width: 400px; 
  
  min-height: 100px;
  height: 100%;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
    border-color: #555;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #f0f0f0;
  text-align: center;
  margin: 0 0 20px 0;
  width: 100%;
  border-bottom: 1px solid #333;
  padding-bottom: 12px;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  
  color: #888;
  transform: scale(1);
  transition: all 0.3s ease;

  &:hover {
    color: #4db5ff;
    transform: scale(1.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillName = styled.span`
  font-size: 10px;
  font-weight: 500;
  opacity: 0.;
  transition: opacity 0.3s ease;
  white-space: nowrap;
  
  ${SkillItem}:hover & {
    opacity: 1;
  }
`;

export { Card, Title, SkillsGrid, SkillItem, IconWrapper, SkillName };
