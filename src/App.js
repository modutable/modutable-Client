import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { Main, Events, Event, Account, CreatEvent } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Events} />
        <Route path="/Event/:id" component={Event} />
        <Route path="/Account" component={Account} />
        <Route path="/CreatEvent" component={CreatEvent} />
      </Router>
    );
  }
}

export default App;
