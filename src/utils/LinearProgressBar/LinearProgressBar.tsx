import styled, { keyframes } from "styled-components";

const fillIn = (width: number | string) => keyframes`
0% {width: 0%;}
100%{width: ${width}%;}
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Percentage = styled.span<{ width: number | string }>`
  display: flex;
  margin-top: 4px;
  font-size: 12px;
  justify-content: end;
  transform: translateX(20px);
  background-color: transparent;
  width: ${({ width }) => width}%;
  animation: ${(props) => fillIn(props.width)} 2s ease-in-out;
`;

const Title = styled.span`
  font-size: 14px;
  margin-bottom: 8px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 50px;
  background-color: #e4e4e4;
`;

const Progressed = styled.div<{ width: number | string; color?: string }>`
  height: 100%;
  border-radius: 50px;
  width: ${({ width }) => width}%;
  background-color: ${({ color }) => color || "#808080"};
  animation: ${(props) => fillIn(props.width)} 2s ease-in-out;
`;

export interface IProps {
  topic: string;
  percentage: number | string;
  color?: string;
  showPercentage?: boolean
}

const LinearProgressBar: React.FC<IProps> = ({ color, topic, percentage, showPercentage }) => {
  return (
    <ProgressBarWrapper>
      <Title>{topic}</Title>
      <ProgressBar>
        <Progressed width={percentage} color={color} />
      </ProgressBar>
      {showPercentage && <Percentage width={percentage}>{`${percentage}%`}</Percentage>}
    </ProgressBarWrapper>
  );
};

export default LinearProgressBar;
