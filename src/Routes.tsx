import * as React from "react";
import { Switch } from "react-router";
import { Link, Route } from "react-router-dom";
import { Sample } from "./Pages/Sample";

export const Routes: React.FC<any> = (props) => {
  return (
    <div>
      <h1>Base React Project</h1>
      <h2>Basic</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sample">Sample</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/sample" component={Sample} />
      </Switch>
    </div>
  );
};
