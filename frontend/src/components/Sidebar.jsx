import React, { useState } from "react";

const Sidebar = ({ handleFilterChange }) => {
// const[Cat,setCategory]=useState([])

  const handleCheckboxChange = (Cat) => {
  
  };

  return (
    <div className="sidebar">
      <h1>Filter by Category</h1>
      <div>
        <input
          type="checkbox"
          value="Action"
          onChange={() => handleCheckboxChange("Action")}
          // checked={Cat.includes("Action")}
        />
        Action
      </div>
      <div>
        <input
          type="checkbox"
          value="Thriller"
          onChange={() => handleCheckboxChange("Thriller")}
          // checked={Cat.includes("Thriller")}
        />
        Thriller
      </div>
      <div>
        <input
          type="checkbox"
          value="Science Friction"
          onChange={() => handleCheckboxChange("Science Friction")}
          // checked={Cat.includes("Science Friction")}
        />
        Science Friction
      </div>
      <div>
        <input
          type="checkbox"
          value="Comedy"
          onChange={() => handleCheckboxChange("Comedy")}
          // checked={Cat.includes("Comedy")}
        />
        Comedy
      </div>
    </div>
  );
};

export default Sidebar;
