import React, { useState } from "react";
import "./cate.css";

export default function Categories({ filterItems, categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterItems(category);
  };

  return (
    <div className="categories-container">
      <div className="dropdown-container">
        <select
          className="dropdown-select"
          value={selectedCategory || ""}
          onChange={(e) => handleCategoryChange(e.target.value)} >
          {/* <option value="">Select a category</option> */}
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      </div>
  );
}
