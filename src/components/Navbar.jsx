import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navbar">
      <div className="nav_logo">
        <img 
        id = "img-logo"
        src="src\assets\logoNegro.png" 
        alt="Alambique"
        className="icons" />
      </div>
      {/* <div className={`nav_items ${isExpanded ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/events" >Events</Link>
        <Link to="/profile" >Profile</Link>
        <Link to="/contact" >Contact</Link>
      </div> */}
      <div className="nav_toggle" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;