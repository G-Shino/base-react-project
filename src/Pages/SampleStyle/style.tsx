import styled from "styled-components";

const WrapperDiv = styled.div`
  width: 300px;
  height: auto;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
`;

//propsを受け取ることが可能　hover等も設定可能
interface TransformDivProps {
  width: string;
  height: string;
}
const TransformDiv = styled.div`
  width: ${(props: TransformDivProps) => props.width}px;
  height: ${(props: TransformDivProps) => props.height}px;
  background-color: blue;
  &:hover {
    background-color: red;
  }
`;

export default {
  WrapperDiv,
  StyledInput,
  TransformDiv,
};
