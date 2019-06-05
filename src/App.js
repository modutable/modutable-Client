import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { Main, Hosts, Host } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Hosts} />
        <Route path="/host/:id" component={Host} />
      </Router>
    );
  }
}

export default App;
