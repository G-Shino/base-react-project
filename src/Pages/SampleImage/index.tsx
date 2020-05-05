import * as React from "react";
import styles from "./style";
import TurnerImage from "./../../Resources/TurnerImage.jpg";

const { WrapperDiv, StyledImage } = styles;

interface FileInputProps {}

export const SampleImage: React.FC<FileInputProps> = ({}) => {
  return (
    <WrapperDiv>
      <StyledImage src={TurnerImage} />
    </WrapperDiv>
  );
};
