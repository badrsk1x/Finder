import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ScreensRoot from "./screens/Root";

import Header from "./components/Header";

import "./assets/styles/index.css";
export class Main extends React.Component {
  render() {
    return (
      <Router>
        <section className="section">
          <div className="container">
            <h1 className="title">Jobs stats</h1>
            <Header />
            <ScreensRoot />
          </div>
        </section>
      </Router>
    );
  }
}

export default Main;
