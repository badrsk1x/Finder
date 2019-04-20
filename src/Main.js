import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { formatAmount } from "./utils.js";

import Header from "./header";
import Home from "./home";
import Add from "./add";
import Stats from "./stats";
import Search from "./search";
export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      monthlyIncome: 20000,
      monthlyExpenses: 12000
    };
  }

  render() {
    const youMayLoan = Math.max(
      0,
      ((this.state.monthlyIncome - this.state.monthlyExpenses) / 0.05) * 12
    );

    return (
      <Router>
        <section className="section">
          <div className="container">
            <h1 className="title">Jobs stats</h1>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={Add} />
              <Route exact path="/stats" component={Stats} />
              <Route exact path="/search" component={Search} />
            </Switch>
          </div>
        </section>
      </Router>
    );
  }
}

export default Main;
