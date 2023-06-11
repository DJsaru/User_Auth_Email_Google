import React from 'react';
import './doctorcard.css'; // Import the CSS file for styling

const doctorsData = [
  {
    id: 1,
    name: 'Dr. Jaybhaye',
    specialization: 'Cardiology',
    experience: '10 years',
    description: 'Dr. John Doe is a highly skilled cardiologist with expertise in heart diseases and cardiac interventions.',
    image: "https://img.freepik.com/free-photo/smiling-young-female-doctor-wearing-medical-robe-looking-putting-hand-arm-keeping-another-one-air_141793-58150.jpg?w=1800&t=st=1686339309~exp=1686339909~hmac=7255dca542e35ea0077db46b2cb6f8a0f8af3701de42ab8ff7e76bea77432e67",
  },
  {
    id: 2,
    name: 'Dr. DJSARU',
    specialization: 'Dermatology',
    experience: '8 years',
    description: 'Dr. Jane Smith is a renowned dermatologist specializing in skin conditions and cosmetic treatments.',
    image: "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg?w=1380&t=st=1686339781~exp=1686340381~hmac=7baf0d82c133808c8e1c8871fae19fbfa78414bfb39d0090a918aaccb8fb4c3e",
  },
  {
    id: 3,
    name: 'Dr. James',
    specialization: 'Dermatology',
    experience: '8 years',
    description: 'Dr. Jane Smith is a renowned dermatologist specializing in skin conditions and cosmetic treatments.',
    image: "https://img.freepik.com/free-photo/smiling-young-female-doctor-wearing-medical-robe-looking-putting-hand-arm-keeping-another-one-air_141793-58150.jpg?w=1800&t=st=1686339309~exp=1686339909~hmac=7255dca542e35ea0077db46b2cb6f8a0f8af3701de42ab8ff7e76bea77432e67",
  }
  // Add more doctors as needed
];

const DoctorCard = () => {
  return (
    <div className="card-container">
      {doctorsData.map((doctor) => (
        <div className="card" key={doctor.id}>
          <div className="card-header">
            <img src={doctor.image} alt={doctor.name} />
            <h1>{doctor.name}</h1>
          </div>
          <div className="card-body" style={{fontSize:"14px"}}>
            <p>Specialization: {doctor.specialization}</p>
            <p>Experience: {doctor.experience}</p>
            <p>{doctor.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorCard;
