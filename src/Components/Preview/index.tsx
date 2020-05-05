import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./style";

//一時的な確認用　リンクから各要素を見れる

const { WrapperDiv } = styles;

export const Preview: React.FC = ({}) => {
  return (
    <WrapperDiv>
      <h1>Base React Project</h1>
      <hr />
      <p>Basic</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sample-hello">Hello</Link>
        </li>
        <li>
          <Link to="/sample-image">Image</Link>
        </li>
        <li>
          <Link to="/sample-style">Style</Link>
        </li>
        <li>
          <Link to="/sample-props">Props</Link>
        </li>
      </ul>
      <hr />
      <p>Library</p>
      <ul>
        <li>
          <Link to="/sample-react-spring">ReactSpring</Link>
        </li>
        <li>
          <Link to="/sample-react-gesture">ReactGesture</Link>
        </li>
      </ul>
      <hr />
    </WrapperDiv>
  );
};
