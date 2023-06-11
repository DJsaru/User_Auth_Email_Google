// import React, { useState } from "react";
// import Footer from "../../Footer/footer";
// import "./demo1.css"

// export default function Appoint() {
//   const [user, setUser] = useState({
//     Fname: "",
//     Lname: "",
//     Age: "",
//     Gender: "",
//     Email: "",
//     Contact: "",
//     Address: "",
//     City: "",
//     Time: "",
//     Date: "",
//   });

//   let name, value;
//   const handleInputChange = (event) => {
//     // const { name, value } = event.target;
//     // setUser((prevUser) => ({
//     //   ...prevUser,
//     //   [name]: value,
//     // }));
//     name = event.target.name;
//     value = event.target.value;

//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // Add your form submission logic here
//     console.log(user);
//     const {
//         Fname,
//         Lname,
//         Age,
//         Gender,
//         Email,
//         Contact,
//         Address,
//         City,
//         Time,
//         Date,
//       } = user;
//       if (
//         !Fname ||
//         !Lname ||
//         !Age ||
//         !Gender ||
//         !Email ||
//         !Contact ||
//         !Address ||
//         !City ||
//         !Time ||
//         !Date
//       ) {
//         setUser({
//           Fname: "",
//           Lname: "",
//           Age: "",
//           Gender: "",
//           Email: "",
//           Contact: "",
//           Address: "",
//           City: "",
//           Time: "",
//           Date: "",
//         });
//         return alert("please fill information!!!");
//       }
  
//       const res = await fetch(
//         "https://medicare-7138b-default-rtdb.firebaseio.com/for.json",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             Fname,
//             Lname,
//             Age,
//             Gender,
//             Email,
//             Contact,
//             Address,
//             City,
//             Time,
//             Date,
//           }),
//         }
//       ).then((response) => window.location.reload());
//     };

//   return (
//     <>
//       <section className="form-section">
//         <h1 className="form-header">APPOINTMENT</h1>
//         <form onSubmit={handleSubmit} className="form-container">
//           <div className="form-row">
//             <div className="form-column">
//               <label htmlFor="firstName">First Name</label>
//               <input
//                 type="text"
//                 name="Fname"
//                 id="firstName"
//                 placeholder="Enter your first name"
//                 required
//                 value={user.Fname}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-column">
//               <label htmlFor="lastName">Last Name</label>
//               <input
//                 type="text"
//                 name="Lname"
//                 id="lastName"
//                 placeholder="Enter your last name"
//                 required
//                 value={user.Lname}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-column">
//               <label htmlFor="age">Age</label>
//               <input
//                 type="number"
//                 name="Age"
//                 id="age"
//                 placeholder="Enter your age"
//                 required
//                 value={user.Age}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-column">
//               <label htmlFor="gender">Gender</label>
//               <input
//                 type="text"
//                 name="Gender"
//                 id="gender"
//                 placeholder="Enter your gender"
//                 required
//                 value={user.Gender}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-column">
//               <label htmlFor="email">E-Mail Address</label>
//               <input
//                 type="email"
//                 name="Email"
//                 id="email"
//                 placeholder="Enter your email"
//                 required
//                 value={user.Email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-column">
//               <label htmlFor="contactNo">Contact Number</label>
//               <input
//                 type="tel"
//                 name="Contact"
//                 id="contactNo"
//                 placeholder="Enter your contact number"
//                 required
//                 value={user.Contact}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-column">
//               <label htmlFor="address">Address</label>
//               <input
//                 type="text"
//                 name="Address"
//                 id="address"
//                 placeholder="Enter your address"
//                 required
//                                value={user.Address}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-column">
//               <label htmlFor="city">City</label>
//               <input
//                 type="text"
//                 name="City"
//                 id="city"
//                 placeholder="Enter your city"
//                 required
//                 value={user.City}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-column">
//               <label htmlFor="timing">Timing</label>
//               <input
//                 type="time"
//                 name="Time"
//                 id="timing"
//                 required
//                 value={user.Time}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-column">
//               <label htmlFor="date">Date to visit</label>
//               <input
//                 type="date"
//                 name="Date"
//                 id="date"
//                 required
//                 value={user.Date}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-column">
//               <button type="submit" className="submit-button" onClick={handleSubmit}>
//                 GET AN APPOINTMENT
//               </button>
//             </div>
//           </div>
//         </form>
//       </section>
//       <Footer />
//     </>
//   );
// }

