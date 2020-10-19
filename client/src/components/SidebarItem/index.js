import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function SidebarItem(props) {
  return (
    <div className="cell-auto sideText">{props.children}</div>
  )
}

export default SidebarItem;
