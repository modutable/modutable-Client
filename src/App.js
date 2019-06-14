import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { Main, Events, Event, Account, CreateEvent } from "./pages";
import GetSocialToken from "./component/common/sideMenu/login/GetSocialToken";

export default function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/sotialTokenQuery" component={GetSocialToken} />
        <Route path="/search" component={Events} />
        <Route path="/event/:id" component={Event} />
        <Route path="/account" component={Account} />
        <Route path="/createEvent" component={CreateEvent} />
      </Switch>
    </Router>
  );
}
