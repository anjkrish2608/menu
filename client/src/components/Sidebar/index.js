import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Sidebar() {
  return (
    <div className="off-canvas position-left reveal-for-large is-transition-push sidebar" data-off-canvas="" aria-hidden="false" >
<div className="cell auto sidebarHead">       </div>
            <div className="cell auto sidebarText">
              <h5>Menus</h5>
              <h6>Cafe</h6>
            </div>
          
  </div>
  );
}

export default Sidebar;
