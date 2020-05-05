import * as React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import { Preview } from "./Components/Preview";
import { SampleHello } from "./Pages/SmapleHello";
import { SampleImage } from "./Pages/SampleImage";
import { SampleReactSpring } from "./Pages/SampleReactSpring";
import { SampleLayout } from "./Pages/SampleLayout";
import { SampleProps } from "./Pages/SampleProps";

//ページごとのルーティング用　ここでパスとコンポーネントを結びつけている

export const Routes: React.FC<any> = (props) => {
  return (
    <div>
      {/* Previewは適宜コメントアウトしてページを確認すること */}
      <Preview />
      <Switch>
        <Route exact path="/sample-hello" component={SampleHello} />
        <Route exact path="/sample-image" component={SampleImage} />
        <Route exact path="/sample-props" component={SampleProps} />
        <Route exact path="/sample-layout" component={SampleLayout} />
        <Route
          exact
          path="/sample-react-spring"
          component={SampleReactSpring}
        />
      </Switch>
    </div>
  );
};
