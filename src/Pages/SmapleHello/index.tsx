import * as React from "react";
import styles from "./style";

//一番シンプルな書き方
//cssをいじらないならstyledを使用しなくてもok

const { WrapperDiv, StyledP } = styles;

export const SampleHello: React.FC = ({}) => {
  return (
    <WrapperDiv>
      <StyledP>Hello</StyledP>
    </WrapperDiv>
  );
};
