import * as React from "react";
import styles from "./style";

const { WrapperDiv, StyledInput, TransformDiv } = styles;

export const SampleStyle: React.FC = ({}) => {
  const [divWidth, setDivWidth] = React.useState("50");
  const [divHeight, setDivHeight] = React.useState("50");

  return (
    <WrapperDiv>
      <p>Width: {divWidth}px</p>
      <StyledInput
        type="range"
        min="0"
        max="200"
        value={divWidth}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDivWidth(e.target.value)
        }
        step="1"
      />
      <p>Height: {divHeight}px</p>
      <StyledInput
        type="range"
        min="0"
        max="200"
        value={divHeight}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDivHeight(e.target.value)
        }
        step="1"
      />
      <p>hoverで赤くなる</p>
      <TransformDiv width={divWidth} height={divHeight}></TransformDiv>
    </WrapperDiv>
  );
};
