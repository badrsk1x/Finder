import React, { Component } from "react";
import { Router } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Add from "./Add";
import Edit from "./Edit";
import Stats from "./Stats";
import Search from "./Search";

const ScreensRoot = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/add" component={Add} />
    <Route exact path="/edit/:id" component={Edit} />
    <Route exact path="/stats" component={Stats} />
    <Route exact path="/search" component={Search} />
  </Switch>
);

export default ScreensRoot;
