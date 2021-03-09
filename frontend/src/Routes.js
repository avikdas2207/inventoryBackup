import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import DashBoard from "./pages/dashBoard/DashBoard.jsx";
import Customers from './pages/customer/customer.jsx';
import history from "./History";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard" component={() => <DashBoard />} />
        </Switch>

      </Router>
    );
  }
}
