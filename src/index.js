import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./modules/core/App";
import { ValueContext } from "./modules/core/context/Provider"
// import value from "./modules/input/Input"


ReactDOM.render(
  <ValueContext.Provider value={"Mehrdad"}>
      <App />
  </ValueContext.Provider>,
  document.getElementById("root")
);
