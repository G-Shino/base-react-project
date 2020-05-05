import * as React from "react";
import styles from "./style";

const {
  WrapperDiv,
  StyledImageDiv,
  StyledImage,
  StyledButtonDiv,
  StyledButton,
} = styles;

export interface ImageChangeCompProps {
  image1: string;
  image2: string;
}

export const ImageChangeComp: React.FC<ImageChangeCompProps> = ({
  image1,
  image2,
}) => {
  const [flagClick, setFlagClick] = React.useState(true);

  return (
    <WrapperDiv>
      <StyledImageDiv>
        <StyledImage src={flagClick ? image1 : image2} />
      </StyledImageDiv>
      <StyledButtonDiv>
        <StyledButton onClick={() => setFlagClick(!flagClick)}>
          {flagClick ? "Afterを見る" : "Beforeを見る"}
        </StyledButton>
      </StyledButtonDiv>
    </WrapperDiv>
  );
};
