import React, { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

function App() {
  const [images, setImages] = useState();

  const uploadFiles = async () => {
    for (let i = 0; i < images.length; i++) {
      const imageRef = ref(storage, `/mulitpleFiles/${images[i].name}`);

      const result = await uploadBytes(imageRef, images[i])
        .then(() => {
          alert("file is upload");
        })
        .catch((error) => {
          console.log("error");
        });
    }
  };

  return (
    <div className="App" style={ {
        display: 'flex',
        margin: 'auto',
        width: 390,
        flexWrap: 'wrap',
        border:"2px solid black",
        borderRadius:"9px",
        marginTop:"30px",
        backgroundColor:"rgba(255, 255, 255, 1)"
        
    }}>
        <diV> 
            <h4 style={ {textAlign:"center", paddingLeft:"95px"}}> Medical Records </h4>
        </diV>
        <div className="pat-data" style={{ width: '100%', float: 'left', padding:"15px" }}>
        <label style={ {
            color:"black", fontSize:"20px", fontWeight:"initial", paddingBottom:"8px"
        }}>Doctor Prescription</label>
            <input
            style={ { border:"2px solid grey", fontSize:"17px",fontWeight:"initial", borderRadius:"4px" }}
        type="file"
        multiple
        onChange={(event) => {
          setImages(event.target.files);
        }}
      />
      <button style={ {border:"2px solid grey", borderRadius:"4px", padding:"5px", marginTop:"10px"}} onClick={uploadFiles}>Upload A File </button>
      <hr />
        </div>


        <div className="pat-data" style={{ width: '100%', float: 'left', padding:"15px", paddingTop:"0px" }}>
        <label style={ {
            color:"black", fontSize:"20px", fontWeight:"initial", paddingBottom:"8px"
        }}>Medical Report</label>
            <input
            style={ { border:"2px solid grey", fontSize:"17px",fontWeight:"initial", borderRadius:"4px" }}
        type="file"
        multiple
        onChange={(event) => {
          setImages(event.target.files);
        }}
      />
      <button style={ {border:"2px solid grey", borderRadius:"4px", padding:"5px", marginTop:"10px"}} onClick={uploadFiles}>Upload A File </button>
      <hr />
        </div>

        <div className="pat-data" style={{ width: '100%', float: 'left', padding:"15px", paddingTop:"0px" }}>
        <label style={ {
            color:"black", fontSize:"20px", fontWeight:"initial", paddingBottom:"8px"
        }}>Blood Report</label>
            <input
            style={ { border:"2px solid grey", fontSize:"17px",fontWeight:"initial", borderRadius:"4px" }}
        type="file"
        multiple
        onChange={(event) => {
          setImages(event.target.files);
        }}
      />
      <button style={ {border:"2px solid grey", borderRadius:"4px", padding:"5px", marginTop:"10px"}} onClick={uploadFiles}>Upload A File </button>
      <hr />
        </div>

        <div className="pat-data" style={{ width: '100%', float: 'left', padding:"15px", paddingTop:"0px" }}>
        <label style={ {
            color:"black", fontSize:"20px", fontWeight:"initial", paddingBottom:"8px"
        }}>X-Ray Report</label>
            <input
            style={ { border:"2px solid grey", fontSize:"17px",fontWeight:"initial", borderRadius:"4px" }}
        type="file"
        multiple
        onChange={(event) => {
          setImages(event.target.files);
        }}
      />
      <button style={ {border:"2px solid grey", borderRadius:"4px", padding:"5px", marginTop:"10px"}} onClick={uploadFiles}>Upload A File </button>
      <hr />
        </div>

        <div className="pat-data" style={{ width: '100%', float: 'left', padding:"15px", paddingTop:"0px"}}>
        <label style={ {
            color:"black", fontSize:"20px", fontWeight:"initial", paddingBottom:"8px"
        }}> Sonography </label>
            <input
            style={ { border:"2px solid grey", fontSize:"17px",fontWeight:"initial", borderRadius:"4px" }}
        type="file"
        multiple
        onChange={(event) => {
          setImages(event.target.files);
        }}
      />
      <button style={ {border:"2px solid grey", borderRadius:"4px", padding:"5px", marginTop:"10px"}} onClick={uploadFiles}>Upload A File </button>
      <hr />
        </div>

        <div className="pat-data" style={{ width: '100%', float: 'left', padding:"15px", paddingTop:"0px" }}>
        <label style={ {
            color:"black", fontSize:"20px", fontWeight:"initial", paddingBottom:"8px"
        }}><i>If Any....</i></label>
            <input
            style={ { border:"2px solid grey", fontSize:"17px",fontWeight:"initial", borderRadius:"4px" }}
        type="file"
        multiple
        onChange={(event) => {
          setImages(event.target.files);
        }}
      />
      <button style={ {border:"2px solid grey", borderRadius:"4px", padding:"5px", marginTop:"10px"}} onClick={uploadFiles}>Upload A File </button>
      <hr style={{lineBreak:"initial"}}/>
        </div>
      
    </div>
  );
}

export default App;
