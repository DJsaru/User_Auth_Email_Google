import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Hello from "./components/hello";
import Cards from "./Department/Cards";
import Navbar from "./Navbar/nav";
import Appoint from "./LoginForm/Appoint/form";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      {/* <Hello /> */}
      {/* <Cards /> */}
      <Appoint />
      {/* <Navbar /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
