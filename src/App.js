import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { Main, Events, Event, Account, CreateEvent } from "./pages";
import App2 from "./component/common/login/App2";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/sotialTokenQuery" component={App2} />
          <Route path="/search" component={Events} />
          <Route path="/event/:id" component={Event} />
          <Route path="/account" component={Account} />
          <Route path="/createEvent" component={CreateEvent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
