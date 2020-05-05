import * as React from "react";
import styles from "./style";
import TurnerImage from "./../../Resources/TurnerImg.jpg";

const { WrapperDiv, StyledImage } = styles;

export const SampleImage: React.FC = ({}) => {
  return (
    <WrapperDiv>
      <StyledImage src={TurnerImage} />
    </WrapperDiv>
  );
};
