import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="grid-y medium-grid-frame">{props.children}</div>;
}

export default Wrapper;
