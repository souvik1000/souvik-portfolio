import React from "react";
import Stack from "src/utils/Stack";
import styled from "styled-components";

const PositionName = styled.p`
  margin: 0px;
  font-size: 24px;
  font-weight: 800;
`;

const Type = styled.a<{ src?: string }>`
  color: #e4e4e4;
  font-size: 20px;
  font-style: italic;
  text-decoration: none;
  cursor: text;
  ${({ src }) =>
    src
      ? `
    cursor: pointer;
    color: #d9ff66;

    &:hover {
        color: #86b300;
    }`
      : null}
`;

const OfficeName = styled.p`
  font-size: 18px;
  margin-top: 4px;

  a {
    color: #ccccff;
    text-decoration: none;

    &:hover {
      color: #8080ff;
    }
  }
`;

const WorkingPeriodAndLocation = styled.div`
  display: flex;
  // color: #f2f2f2;
  color: #666;
  font-size: 11px;
  font-style: italic;
  justify-content: space-between;
`;

const ShortInfo = styled.p`
  color: #666;
  font-size: 13px;
  font-style: italic;
  text-align: justify;
  text-align--last: justify;
`;

const KeysHeading = styled.span`
  font-size: 13px;
  font-weight: 600;
  text-decoration: underline;
`;

const Responsibilities = styled.div`
  font-size: 14px;
  text-align: justify;
  text-align--last: justify;
`;

interface IProps {
  employee: {
    type: string;
    position: string;
    src?: string;
  };
  employer: {
    name: string;
    joined: string;
    leaved: string;
    location: string;
    profileURL: string;
    description?: string;
  };
  responsibilities?: string | string[];
}

const CompanyTemplate: React.FC<IProps> = ({
  employee,
  employer,
  responsibilities,
}) => {
  const { type, position, src } = employee;
  const {
    name: companyName,
    joined,
    leaved,
    location,
    profileURL,
    description: roleOrDesc,
  } = employer;

  return (
    <Stack margin={8} direction="column">
      <div>
        <PositionName>
          {position}(
          <Type src={src} href={src || "#"} target={src ? "_blank" : "_self"}>
            {type}
          </Type>
          )
        </PositionName>
        <OfficeName>
          <a href={profileURL} target="_blank">
            {companyName}
          </a>
        </OfficeName>
      </div>
      <WorkingPeriodAndLocation>
        <div>
          {joined} - {leaved}
        </div>
        <div>{location}</div>
      </WorkingPeriodAndLocation>
      <ShortInfo>{roleOrDesc}</ShortInfo>
      {responsibilities && (
        <Responsibilities>
          <p style={{ fontWeight: "500", letterSpacing: "0.1em" }}>
            <KeysHeading>Responsibilities</KeysHeading>:
          </p>
          <Stack margin={16} direction="column">
            {typeof responsibilities === "string" ? (
              <div>- {responsibilities}</div>
            ) : (
              responsibilities.map((responsibility, index) => (
                <div key={index}>- {responsibility}</div>
              ))
            )}
          </Stack>
        </Responsibilities>
      )}
    </Stack>
  );
};

export default CompanyTemplate;
