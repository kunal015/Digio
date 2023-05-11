import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import signIn from "./signIn";
import aadharOtp from "./aadharOtp";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={signIn} />
          <Route path="/aadharOtp" component={aadharOtp} />
        </Switch>
      </Router>
    );
  }
}
