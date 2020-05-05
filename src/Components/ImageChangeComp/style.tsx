import styled from "styled-components";

const WrapperDiv = styled.div`
  width: 500px;
  height: 600px;
  border: solid 2px;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 500px 100px;
  grid-template-areas:
    "areaImage"
    "areaButton";
`;

const StyledImageDiv = styled.div`
  grid-area: areaImage;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
`;

const StyledButtonDiv = styled.div`
  grid-area: areaButton;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 90%;
  height: 50%;
  border-radius: 10px;
`;

export default {
  WrapperDiv,
  StyledImageDiv,
  StyledImage,
  StyledButtonDiv,
  StyledButton,
};
