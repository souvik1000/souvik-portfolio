import Stack from "../Stack";
import LinearProgressBar, {
  IProps as LinearProgressBarProps,
} from "./LinearProgressBar";

interface IProps {
  options: LinearProgressBarProps[];
  showPercentage?: boolean;
}

const LinearProgressBarWithOptions: React.FC<IProps> = ({ options, showPercentage }) => {
  return (
    <Stack
      margin={24}
      direction="column"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {options.map((value, index) => (
        <LinearProgressBar
          key={index}
          topic={value.topic}
          percentage={value.percentage}
          showPercentage={showPercentage}
        />
      ))}
    </Stack>
  );
};

export default LinearProgressBarWithOptions;
