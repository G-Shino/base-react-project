import * as React from "react";
import styles from "./style";

//メディアクエリの書き方

const { WrapperDiv, ResponsiveDiv } = styles;

export const SampleResposive: React.FC = ({}) => {
  return (
    <WrapperDiv>
      <ResponsiveDiv>リサイズしてみてね</ResponsiveDiv>
    </WrapperDiv>
  );
};
