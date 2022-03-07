import React from "react";
import ReactDOM from "react-dom";
import "./Assets/Styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

import './Assets/boxicons-2.0.7/css/boxicons.min.css'
import './Assets/Styles/css/grid.css';
import './Assets/Styles/css/index.css';
import './Assets/Styles/css/theme.css';

import Layout from "./Components/Layout/Layout"

const store = createStore(
  rootReducer
)

document.title = 'Sneaker Shop'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
