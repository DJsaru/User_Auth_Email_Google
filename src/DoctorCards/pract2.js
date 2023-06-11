import React from 'react';
import "./pract2.css"

export default function Prac2({items}) {
    return(
        <div className="card-container">
            {items.map((items) =>{
                const{id, images, name, category,experience,description}=items
                    return(
                        <div className="card" key={id}>
                            <div className="card-header">
                                <img src={images} />
                                <h1>{name}</h1>
                            </div>
                            <div className="card-body" style={{fontSize:"14px"}}>
                            <h2>{category}</h2>
                            <h2> Experience : {experience}</h2>
                            <h3>{description}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}