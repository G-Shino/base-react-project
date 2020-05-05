import * as React from "react";
import { Switch } from "react-router";
import { Link, Route } from "react-router-dom";
import { SampleHello } from "./Pages/SmapleHello";
import { SampleImage } from "./Pages/SampleImage";
import { SampleReactSpring } from "./Pages/SampleReactSpring";
import { SampleLayout } from "./Pages/SampleLayout";
import { SampleProps } from "./Pages/SampleProps";

export const Routes: React.FC<any> = (props) => {
  return (
    <div>
      <h1>Base React Project</h1>
      <hr />
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
          <Link to="/sample-props">Props</Link>
        </li>
        <li>
          <Link to="/sample-layout">Layout</Link>
        </li>
        <li>
          <Link to="/sample-react-spring">React Spring</Link>
        </li>
      </ul>
      <hr />
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
