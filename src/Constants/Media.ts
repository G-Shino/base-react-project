import { generateMedia } from "styled-media-query";

//メディアクエリ用のピクセルを指定する
//bootstrapを参考

export const Media = generateMedia({
  sm: "768px",
  md: "992px",
  lg: "1200px",
});
