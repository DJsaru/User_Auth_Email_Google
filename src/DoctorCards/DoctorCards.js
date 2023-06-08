import React from 'react';
import "./doctorcard.css"

const DoctorCard = ({ clinicName, specialization, contactDetails, image }) => {
  return (
    <div className="doctor-card">
      <h2 className="clinic-name">{clinicName}</h2>
      <div className="content">
        <div className="left-side">
          <img src={image} alt="img" className="doctor-image" />
        </div>
        <div className="right-side">
          <h4 className="specialization">Specialization: {specialization}</h4>
          <div className="contact-details">
            <h4>Contact Details:</h4>
            <p>Phone: {contactDetails.phone}</p>
            <p>Email: {contactDetails.email}</p>
            <p>Address: {contactDetails.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DoctorCards = () => {
  const doctors = [
    {
        clinicName: "ABC Medical Center",
        specialization: "Cardiology",
        contactDetails: {
          phone: "123-456-7890",
          email: "doctor1@example.com",
          address: "123 Main Street, City, Country"
        },
        image:"../Department/heart_icon.png" 
      },
    {
      clinicName: "XYZ Clinic",
      specialization: "Dermatology",
      contactDetails: {
        phone: "987-654-3210",
        email: "doctor2@example.com",
        address: "456 Park Avenue, City, Country"
      },
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw0x6hyJVyXtoUxPsdaUPYst&ust=1686167252030000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiBkdK0r_8CFQAAAAAdAAAAABAE"
    }
  ];

  return (
    <div>
      {doctors.map((doctors, i) => (
        <DoctorCard
          key={i}
          clinicName={doctors.clinicName}
          specialization={doctors.specialization}
          contactDetails={doctors.contactDetails}
          image src={doctors.image}
        />
      ))}
    </div>
  );
};

export default DoctorCards;
