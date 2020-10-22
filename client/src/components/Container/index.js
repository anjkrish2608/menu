import React from "react";
import "./style.css";
function Container(props) {
  return  <div className="cell medium-auto medium-cell-block-container container">{props.children}</div>;
}

export default Container;
