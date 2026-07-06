import { FC, useEffect, useRef } from "react";

import "./styles.css";

export interface IProps {
  topic: string;
  percentage: number | string;
  showPercentage?: boolean;
}

const CircularProgressBar: FC<IProps> = ({ percentage, showPercentage, topic }) => {
  const progressRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const perimeter = -219.99078369140625;
    const value = progressRef.current;

    if (value) {
      const fillElement = value.querySelector(".fill");
      const valueElement = value.querySelector(".value");
      const percentString = value.getAttribute("data-progress");
      const textElement: HTMLElement | null = value.querySelector(".text");

      if (percentString) {
        if (fillElement) {
          fillElement.setAttribute(
            "style",
            `stroke-dashoffset: 
                ${((100 - parseInt(percentString)) / 100) * perimeter}
            `
          );
        }

        if (showPercentage) {
          if (valueElement) {
            valueElement.innerHTML = percentString + "%";
          }
        } else {
          if (textElement) {
            textElement.style.fontSize = "8px";
          }
        }
      }
    }
  }, [percentage, showPercentage]);

  return (
    <>
      <div className="wrapper-center">
        <div className="progress-bar">
          <svg
            ref={progressRef}
            className="progress"
            data-progress={percentage}
            x="0px"
            y="0px"
            viewBox="0 0 80 80"
          >
            <path
              className="track"
              d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
            />
            <path
              className="fill"
              d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
            />
            {
              showPercentage &&
              <text className="value" x="50%" y="45%">
                0%
              </text>
            }
            <text className="text" x="50%" y={showPercentage ? "65%" : "55%"}>
              {topic.split(" ").map((t, i) => {
                const topicLength = topic.split(" ").length;
                const dy = topicLength > 1 ? (i === 0) ? `${-0.6 * (topicLength - 1)}em` : "1.2em" : "0";
                return <tspan key={i} x="50%" dy={dy}>
                  {t}
                </tspan>
              })}
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default CircularProgressBar;
