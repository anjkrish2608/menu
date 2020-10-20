import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import FontAwesome from "react-fontawesome";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function UserNavbar() {
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
          <Link to="/" className="links">Log out</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default UserNavbar;
