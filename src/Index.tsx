import * as React from "react";
import * as ReactDOM from "react-dom";
import { Routes } from "./Routes";
import { HashRouter } from "react-router-dom";
import { GlobalStyle } from "./Components/GlobalStyle";

ReactDOM.render(
  <div>
    <GlobalStyle />
    <HashRouter>
      <Routes />
    </HashRouter>
  </div>,
  document.getElementById("app")
);
