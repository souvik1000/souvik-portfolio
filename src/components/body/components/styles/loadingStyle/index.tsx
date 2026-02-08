import React from "react";
import CircularProgressBar, {
  IProps as CircularProgressBarProps,
} from "./CircularProgressBar";

interface IProps {
  options: CircularProgressBarProps[];
  showPercentage?: boolean;
}

const LoadingStyle: React.FC<IProps> = ({ options, showPercentage }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {options.map((value, index) => (
        <CircularProgressBar
          key={index}
          topic={value.topic}
          percentage={value.percentage}
          showPercentage={showPercentage}
        />
      ))}
    </div>
  );
};

export default LoadingStyle;
