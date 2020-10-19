import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Sidebar(props) {
  return (
    <div className="off-canvas position-left reveal-for-large is-transition-push sidebar" data-off-canvas="" aria-hidden="false" >{props.children}</div>
  );
}

export default Sidebar;
