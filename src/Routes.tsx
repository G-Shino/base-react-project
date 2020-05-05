import * as React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import { Preview } from "./Components/Preview";
import { SampleHello } from "./Pages/SmapleHello";
import { SampleImage } from "./Pages/SampleImage";
import { SampleStyle } from "./Pages/SampleStyle";
import { SampleProps } from "./Pages/SampleProps";
import { SampleReactSpring } from "./Pages/SampleReactSpring";
import { SampleReactGesture } from "./Pages/SampleReactGesture";
import { SampleAxios } from "./Pages/SampleAxios";

//ページごとのルーティング用　ここでパスとコンポーネントを結びつけている

export const Routes: React.FC = () => {
  return (
    <div>
      {/* Previewは適宜コメントアウトしてページを確認すること */}
      <Preview />
      <Switch>
        <Route exact path="/sample-hello" component={SampleHello} />
        <Route exact path="/sample-image" component={SampleImage} />
        <Route exact path="/sample-style" component={SampleStyle} />
        <Route exact path="/sample-props" component={SampleProps} />
        <Route
          exact
          path="/sample-react-spring"
          component={SampleReactSpring}
        />
        <Route
          exact
          path="/sample-react-gesture"
          component={SampleReactGesture}
        />
        <Route exact path="/sample-axios" component={SampleAxios} />
      </Switch>
    </div>
  );
};
