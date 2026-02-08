import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  height: 100px;
  margin-top: 50px;

  ul {
    margin: 0;
    padding: 0;
    z-index: 3;
    width: 100%;
    margin-top: -40px;
    padding-top: 15px;
    position: absolute;
  }
`;

const ListElement = styled.div<{ activeState: string }>`
  width: 20%;
  float: left;
  color: #aaa;
  height: 60px;
  font-size: 11px;
  cursor: pointer;
  font-weight: 700;
  list-style: none;
  position: relative;
  text-align: center;
  vertical-align: bottom;
  text-transform: uppercase;
  transition: all ease 0.2s;

  &:before {
    width: 30px;
    content: " ";
    height: 30px;
    margin: auto;
    display: block;
    border-radius: 50%;
    border: solid 2px #aaa;
    transition: all ease 0.3s;
  }

  &:hover:before {
    border: solid 2px orange;

    background: radial-gradient(
      circle,
      rgba(255, 199, 82, 1) 10%,
      rgba(255, 172, 0, 1) 100%
    );
  }

  .step-inner {
    bottom: 0;
    width: 100%;
    display: flex;
    font-size: 12px;
    position: absolute;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    color: #ff6901;
  }

  &:after {
    width: 5px;
    height: 5px;
    content: " ";
    margin: auto;
    display: block;
    background: #000;
    margin-top: 40px;
    border-radius: 50%;
    border: solid 8px #e4e4e4;
    transition: all ease 0.2s;
    box-shadow: 0 2px 13px -1px rgba(0, 0, 0, 0.3);
  }

  &:hover:after {
    background: #555;
  }

  ${({ activeState }) => activeState} {
    color: #ff6901;

    &:before {
      border: solid 2px orange;

      background: radial-gradient(
        circle,
        rgba(255, 199, 82, 1) 10%,
        rgba(255, 172, 0, 1) 100%
      );
    }

    &:after {
      background-color: rgba(255, 105, 0, 1);
    }
  }
`;

const Line = styled.div`
  left: 10%;
  top: 57px;
  width: 80%;
  z-index: 1;
  height: 4px;
  margin: auto;
  position: absolute;
  background: #e4e4e4;
  border-radius: 50px;
  transition: all ease 0.9s;
`;

const LineProgress = styled.div<{ filled: number | string }>`
  width: ${({ filled }) => filled}%;
  z-index: 2;
  content: " ";
  height: 100%;
  position: absolute;
  background: #ff9400;
  border-radius: 50px;
  transition: all ease 0.9s;
`;

const ProgressContentSection = styled.div`
  width: 90%;
  margin: auto;
`;

type DivProps = Omit<JSX.IntrinsicElements["div"], "ref">;

type ListItem = {
  itemName: string;
  renderedElement?: JSX.Element | string;
};

interface IProps extends DivProps {
  options: ListItem[];
}

const HorizontalTimeline: React.FC<IProps> = ({ options, ...otherProps }) => {
  const [selectedState, setSelectedState] = React.useState(0);
  const [activeProgress, setActiveProgess] = React.useState(3);
  const [activeState, setActiveState] = React.useState("&.step0");

  const setActiveItems = (totalLength: number, targetOptionIndex: number) => {
    const activeProgess = (100 / (totalLength - 1)) * targetOptionIndex || 3;
    const listElement = Array.from(Array(totalLength).keys());

    const selectedOptions = listElement
      .filter((option) => option <= targetOptionIndex)
      .map((option) => `&.step${option}`);

    setActiveProgess(activeProgess);
    setSelectedState(targetOptionIndex);
    setActiveState(selectedOptions.join(", "));
  };

  return (
    <>
      <ProgressBarContainer>
        <ul>
          {options.map((item, index, items) => {
            const { itemName } = item;
            return (
              <ListElement
                key={index}
                className={`step${index}`}
                activeState={activeState}
                onClick={() => setActiveItems(items.length, index)}
              >
                <div className="step-inner">{itemName}</div>
              </ListElement>
            );
          })}
        </ul>

        <Line>
          <LineProgress filled={activeProgress}></LineProgress>
        </Line>
      </ProgressBarContainer>

      <ProgressContentSection {...otherProps}>
        {options.map((item, index, items) => {
          const { renderedElement } = item;
          return index === selectedState ? renderedElement : null;
        })}
      </ProgressContentSection>
    </>
  );
};

export default HorizontalTimeline;
