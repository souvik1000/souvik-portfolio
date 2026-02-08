import styled from "styled-components";

const Card = styled.div`
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  color: #fff;
  transition: all 1s ease;
  width: 100%;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-height: 160px; /* Collapsed height showing only header */

  &:hover {
    transform: translateY(-5px);
    background: rgba(30, 30, 30, 0.95); /* Darker background on hover for readability */
    border-color: rgba(77, 181, 255, 0.5); /* Blue border hint */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    max-height: 800px; /* Expand to show content */
    z-index: 10;
  }

  /* Indicate interaction hint */
  &::after {
    content: "Hover for details";
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    opacity: 1;
    transition: opacity 0.8s;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 12px;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CompanyName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #f0f0f0;
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #4db5ff;
    }
  }
`;

const Role = styled.div`
  font-size: 1rem;
  color: #ccc;
  font-weight: 500;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-size: 0.85rem;
  color: #888;
  
  @media (max-width: 600px) {
    align-items: flex-start;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const DetailsWrapper = styled.div`
  opacity: 0;
  transition: opacity 0.8s ease 0.2s; /* Slight delay */
  
  ${Card}:hover & {
    opacity: 1;
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 16px;
`;

const Responsibilities = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ResponsibilityItem = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: #aaa;
  line-height: 1.5;

  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: #4db5ff;
  }
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.05);
  color: #aaa;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s;

  ${Card}:hover & {
    background: rgba(77, 181, 255, 0.1);
    border-color: rgba(77, 181, 255, 0.2);
    color: #4db5ff;
  }
`;

export { Card, CompanyName, DetailsWrapper, Description, Header, MetaInfo, MetaItem, Role, ResponsibilityItem, Responsibilities, Tag, TitleGroup };
