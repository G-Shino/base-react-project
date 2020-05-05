import * as React from "react";
import styles from "./style";

const { WrapperDiv } = styles;

interface FileInputProps {}

export const SampleHello: React.FC<FileInputProps> = ({}) => {
  return (
    <WrapperDiv>
      <p>Hello</p>
    </WrapperDiv>
  );
};
