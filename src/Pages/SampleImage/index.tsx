import * as React from "react";
import styles from "./style";
import TurnerImage from "./../../Resources/TurnerImage.jpg";

const { WrapperDiv, StyledImage } = styles;

export const SampleImage: React.FC = ({}) => {
  return (
    <WrapperDiv>
      <StyledImage src={TurnerImage} />
    </WrapperDiv>
  );
};
