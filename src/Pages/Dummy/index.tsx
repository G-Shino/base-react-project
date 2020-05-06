import * as React from "react";
import styles from "./style";
import { useTrail, animated } from "react-spring";

//なぜかこのファイルがないとuseSpringsがうまく読み込まれない　モジュールとして先に読み込むこと
const { WrapperDiv, StyledDiv } = styles;

interface FileInputProps {}

export const Dummy: React.FC<FileInputProps> = ({}) => {
  const trails = useTrail(2, {
    position: "absolute" as "absolute",
  });
  return (
    <WrapperDiv>
      <StyledDiv>
        {trails.map((trail, idx) => (
          <animated.span style={{ ...trail }}></animated.span>
        ))}
      </StyledDiv>
    </WrapperDiv>
  );
};
