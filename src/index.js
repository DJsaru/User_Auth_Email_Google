import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Departments from "./Department/depart";
import LandPage from "./Home/landingPage";
import DoctorCards from "./DoctorCards/DoctorCards";



ReactDOM.render(
  <React.StrictMode>
  
    {/* <Departments /> */}
    <Router>
    {/* <LandPage /> */}
    <DoctorCards />

    </Router>


  </React.StrictMode>,
  document.getElementById("root")
);
