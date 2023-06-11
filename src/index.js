import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Departments from "./Department/depart";
import LandPage from "./Home/landingPage";
import DoctorCards from "./DoctorCards/DoctorCards";
import Practise from "./DoctorCards/Practise";
import Appoint from "./LoginForm/Appoint/form";
import Demo1 from "./LoginForm/Appoint/demo1";



ReactDOM.render(
  <React.StrictMode>
  
    {/* <Departments /> */}
    {/* <Router> */}
    {/* <LandPage /> */}
    {/* <Practise /> */}
    {/* <DoctorCards /> */}

    {/* </Router> */}
  {/* <Appoint /> */}
  {/* <Demo1 /> */}
  <Appoint />

  </React.StrictMode>,
  document.getElementById("root")
);
