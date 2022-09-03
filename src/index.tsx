import reportWebVitals from './reportWebVitals';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";

import "bootstrap";
import configureStore from './store/configureStore';

const configuredStore = configureStore();
const app = (
  <Provider store={configuredStore}>
      <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root") as HTMLElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
