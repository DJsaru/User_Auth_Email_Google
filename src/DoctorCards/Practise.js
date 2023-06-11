import React, { useState } from "react";
import items from "./Data";
import Prac2 from "./pract2";
import Categories from "./Cate";
import { Link, useNavigate } from "react-router-dom";
import "./practise.css";

const allcategories = ['all',...new Set(items.map((item)=>item.category))]

export default function Practise() {

    const[dinfo, setdinfo] = useState(items);
    const[categories,setcategories] = useState(allcategories);

    const filterItems = (cateogry) =>{
        if(cateogry === 'all'){
            return setdinfo(items);
        }
        const newItems = items.filter((item) => item.category === cateogry)
        return setdinfo(newItems);
    }

    return(
        <div>
            <div className="hero-container">
      <h1 className="hero-title">Welcome to Our Doctor Department</h1>
      <p className="hero-description">
        We have a team of dedicated doctors ready to provide you with the best
        medical care.
      </p>
    </div>
            <Categories filterItems={filterItems} categories={categories}/>
            <Prac2 items={dinfo}/>
        </div>
    )
}