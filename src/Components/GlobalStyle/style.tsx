import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Color } from "./../../Constants/Color";

// レセットしたいものやグローバルに適用したいものはここに書く
// ベースのフォントを10pxにする rem指定がわかりやすくなる　だいたいのブラウザはデフォルトで16px
// フォントサイズは基本的にrem, emで指定する
// bodyは14px chromeのバグのためemで指定

// ↓は暫定的
// それぞれの要素はパーセントかピクセル指定
// おおもとのものや、縦いっぱい表示のした時　のみvw vh を利用する
// 全体のレイアウトはcss gridで　細かい部分はflex

const StyledGlobal = createGlobalStyle`
  ${reset}

  html{
    font-size: 62.5%;
  }

  body {
    margin: 0;
    background: ${Color.BASE_COLOR};
    color: ${Color.FONT_COLOR};
    font-size: 1.4em;
    font-family:"Yu Gothic", "YuGothic", "Helvetica Neue", "Arial", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Meiryo", "sans-serif";
  }

  h1{
    font-size: 4rem;
  }
`;

export default {
  StyledGlobal,
};
