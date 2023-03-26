import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import Navbar from "./components/Navbar";
import "./index.css";
import { store } from "./redux/store";
import Root from "./root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <Root />
    </Provider>
  </React.StrictMode>
);
