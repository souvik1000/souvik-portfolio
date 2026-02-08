import React from "react";
import { FaBriefcase, FaCalendarAlt, FaExternalLinkAlt, FaMapMarkerAlt } from "react-icons/fa";

import { ExperienceData } from "./experienceData";
import { Card, CompanyName, DetailsWrapper, Description, Header, MetaInfo, MetaItem, Role, ResponsibilityItem, Responsibilities, Tag, TitleGroup } from "./experienceStyles";

const ExperienceCard: React.FC<ExperienceData> = ({
  companyName,
  role,
  type,
  startDate,
  endDate,
  location,
  website,
  description,
  responsibilities,
  certificate,
}) => {
  const ExternalLinkIcon = FaExternalLinkAlt as any;
  const CalendarIcon = FaCalendarAlt as any;
  const MapMarkerIcons = FaMapMarkerAlt as any;
  const BriefcaseIcon = FaBriefcase as any;

  return (
    <Card>
      <Header>
        <TitleGroup>
          <CompanyName>
            <a href={website} target="_blank" rel="noopener noreferrer">
              {companyName} <ExternalLinkIcon size={12} />
            </a>
          </CompanyName>
          <Role>{role}</Role>
        </TitleGroup>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
          <Tag>{type}</Tag>
          <MetaInfo>
            <MetaItem>
              <CalendarIcon size={12} /> {startDate} - {endDate}
            </MetaItem>
            <MetaItem>
              <MapMarkerIcons size={12} /> {location}
            </MetaItem>
          </MetaInfo>
        </div>
      </Header>

      <DetailsWrapper>
        <Description>{description}</Description>

        {responsibilities && responsibilities.length > 0 && (
          <Responsibilities>
            {responsibilities.map((item, index) => (
              <ResponsibilityItem key={index}>{item}</ResponsibilityItem>
            ))}
          </Responsibilities>
        )}

        {certificate && (
          <div style={{ marginTop: "16px" }}>
            <a
              href={certificate}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#4db5ff',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}
            >
              <BriefcaseIcon size={14} /> View Certificate
            </a>
          </div>
        )}
      </DetailsWrapper>
    </Card>
  );
};

export default ExperienceCard;
