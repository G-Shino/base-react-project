import * as React from "react";
import styles from "./style";
import BeforeImg from "./../../Resources/BeforeImg.jpg";
import AfterImg from "./../../Resources/AfterImg.jpg";
import {
  ImageChangeComp,
  ImageChangeCompProps,
} from "./../../Components/ImageChangeComp";

//コンポーネントに切り分ける例 長くなりそうなら部品をcomponent以下に分けていく
//Propsをまとめて渡すか、直接渡す　二種類のやり方がある
//基本は後者で複雑になったら前者（かなぁ）

const { WrapperDiv } = styles;

export const SampleProps: React.FC = ({}) => {
  const imageChangeCompProps: ImageChangeCompProps = {
    image1: BeforeImg,
    image2: AfterImg,
  };
  return (
    <WrapperDiv>
      <ImageChangeComp {...imageChangeCompProps} />
      <br />
      <ImageChangeComp image1={BeforeImg} image2={AfterImg} />
    </WrapperDiv>
  );
};
