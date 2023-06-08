import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Departments from "./Department/depart";

ReactDOM.render(
  <React.StrictMode>
  
    <Departments />
    
  </React.StrictMode>,
  document.getElementById("root")
);
