import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Todo/Redux/Store";
import App from "./Todo/App";
import { ToastContainer, toast } from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App></App>
    <ToastContainer />
  </Provider>
);
