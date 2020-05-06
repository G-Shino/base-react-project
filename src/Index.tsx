import * as React from "react";
import * as ReactDOM from "react-dom";
import { Routes } from "./Routes";
import { HashRouter } from "react-router-dom";
import { GlobalStyle } from "./Components/GlobalStyle";

//ライブラリ等でくるむ場所　reduxを導入するならproviderが入る場所

ReactDOM.render(
  <div>
    <GlobalStyle />
    <HashRouter>
      <Routes />
    </HashRouter>
  </div>,
  document.getElementById("app")
);
