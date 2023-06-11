import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./landpage.css";
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

export default function LandPage(){

    const Nav = useNavigate();
  const appo = () => {
    Nav("/visitADoc");
  };

    return(
        <div >
            <div class="background-image">
        <div class="background-content" data-aos="fade-up">
            <h1>Welcome to MediCare </h1>
            <p>- Your Online Medical Appointment Platform<br /></p>
            
        </div>
    </div>
    <div class="about" data-aos="fade-up">
        <div class="main-about">
            <div class="inner-about">
                <div class="about-content">
                    <h1>About us</h1>
                <p>Our mission is to provide convenient and efficient healthcare services at your fingertips. 
                    With our user-friendly platform, you can easily book appointments with experienced doctors
                     from the comfort of your own home.</p>
                <a href="#">R</a>
                </div>
                
            </div>
            <div class="inner-about">
                <div class="inner-about-image">
                    <img src="https://img.freepik.com/free-photo/portrait-asian-doctor-woman-cross-arms-standing-medical-uniform-stethoscope-smiling-camera-white-background_1258-83220.jpg?w=2000&t=st=1686202503~exp=1686203103~hmac=349d4eb5b76c6a3c1ff5e55961f53d1c814de6e9adc2805a9c95febb1f0cae46" alt="freepic doctor images"/>

                </div>
            </div>
        </div>
    </div>

    <div class="our-services">
        <div class="service-content">
            <div class="left-service-content">
                <h1>Medical Branch</h1>
                <p>Select the medical branch you require diagnosis in.</p>
            </div>

            <div class="right-service-content">
                <div class="right-btn">
                    <a href="#">See all services</a>
                </div>
            </div>
        </div>
        </div>
   
        <div class="why-choseus">
        <div class="main-chose">
            <div class="inner-chose">
                <img src="https://img.freepik.com/free-photo/portrait-doctor_144627-39387.jpg?w=740&t=st=1686142401~exp=1686143001~hmac=c833cd09773fe156a7cbc761dff5ea580bb644b76d308c968a61e1c36d2719bf" alt="freepic doctor images"/>
            </div>
    
            <div class="inner-chose">
                <h1>why chose us </h1>
    
                <div class="inner-chose-content">
                    <div class="main-inner-chose">
                        <div class="chose-icon">
                            <i class="fas fa-notes-medical"></i>
                        </div>
                        <div class="icon-content">
                            <p>Book and consult with doctors from the comfort of your own home, saving you time and effort. </p>
                        </div>
                    </div>
    
                    <div class="main-inner-chose">
                        <div class="chose-icon">
                            <i class="fas fa-hospital-user"></i>
                            
                        </div>
                        <div class="icon-content">
                            <p>Say goodbye to the hassle of carrying physical documents. Our digital platform allows you to securely store and access your medical records online.</p>
                        </div>
                    </div>
    
                    <div class="main-inner-chose">
                        <div class="chose-icon">
                            <i class="fas fa-user-md"></i>
                        </div>
                        <div class="icon-content">
                            <p>Skip the long waiting times at hospitals. You can schedule your consultation in advance and avoid unnecessary waiting. </p>
                        </div>
                    </div>
                    <br/>
                     <nav>
            <Link to="/visitADoc/appoint">
              <div onClick={appo}>
                Book an Appointment
              </div>
            </Link>
          </nav>

                    <a href="#">Book an Appointment</a>
                </div>
            </div>
        </div>
    </div>
    </div>
   
    )
}

