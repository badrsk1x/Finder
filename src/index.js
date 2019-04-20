import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";

import "bulma";

import "./index.css";

import Main from "./Main.js";

const element = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(element);
render(<Main />, document.getElementById("App"));
/*
const element = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(element);
ReactDOM.render(<Main />, element);
*/
