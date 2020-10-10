import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div className="cell" data-sticky-container>
      <div className="cell shrink header medium-cell-block-container">
        <ul className="menu align-right">
          <li className="active menu-text">
          <Link to="/">Home</Link>
          </li>
          <li className="active menu-text">
          <Link  to="/contact">Contact</Link>
          </li>
          <li className="active menu-text">
          <Link to="/help">Help</Link>
          </li>
          <li className="active menu-text">
          <Link to="/signup">Sign Up</Link>
          </li>
          <li className="active menu-text">
          <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
