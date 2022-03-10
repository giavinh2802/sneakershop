import React from "react";
import ReactDOM from "react-dom";
import "./Assets/Styles/index.css";
import App from "./App";

import { createStore } from "redux";

import { Provider } from "react-redux";

import rootReducer from "./redux/reducers";

import "./Assets/boxicons-2.0.7/css/boxicons.min.css";
import "./Assets/Styles/css/grid.css";
import "./Assets/Styles/css/index.css";
import "./Assets/Styles/css/theme.css";

import Layout from "./Components/Layout/Layout";

const store = createStore(rootReducer);

document.title = "Sneaker Shop";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
