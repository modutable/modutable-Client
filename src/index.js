import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import devTools from "redux-devtools-extension";
import rootReducer from "./store/modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
