import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";

import "bulma";

import "./index.css";

import Main from "./Main.js";

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("App")
);
