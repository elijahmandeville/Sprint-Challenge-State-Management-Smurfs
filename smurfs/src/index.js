import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { reducer } from "./store/reducers";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { Provider } from "react-redux";
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
