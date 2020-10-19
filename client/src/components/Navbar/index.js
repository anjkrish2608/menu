import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import FontAwesome from "react-fontawesome";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div className="cell navbar" data-sticky-container>
      <div className="cell shrink header medium-cell-block-container">
      
        <ul className="menu align-right">
          <li className="icon"> 
          menU
          </li>
          <li>
        <FontAwesome className="fas fa-utensils icon"/>
        </li>
          <li className="menu-text">
          <Link to="/" className="links">Home</Link>
          </li>
          <li className="menu-text">
          <Link  to="/contact" className="links">Contact</Link>
          </li>
          <li className="menu-text">
          <Link to="/help" className="links">Help</Link>
          </li>
          <li className="menu-text">
          <Link to="/signup" className="links">Sign Up</Link>
          </li>
          <li className="menu-text">
          <Link to="/signin" className="links">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
