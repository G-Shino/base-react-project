import styled from "styled-components";
import { Color } from "./../../Constants/Color";
import { Media } from "./../../Constants/Media";

const WrapperDiv = styled.div``;
const ResponsiveDiv = styled.div`
  height: 500px;
  width: 900px;
  color: ${Color.FONT_SUB_COLOR};
  background-color: ${Color.MAIN_COLOR};
  ${Media.lessThan("md")`
    width: 700px;
    color:${Color.FONT_COLOR}
    background-color: ${Color.ACCENT_COLOR_1};`}
  ${Media.lessThan("sm")`
    width: 500px;
    color:${Color.FONT_COLOR}
    background-color: ${Color.ACCENT_COLOR_2};`}
`;

export default {
  WrapperDiv,
  ResponsiveDiv,
};
