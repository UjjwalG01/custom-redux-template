import "./index.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>
    </React.Fragment>
  );
}

export default App;
