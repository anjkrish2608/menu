import React from "react";

function Container(props) {
  return  <div className="cell medium-auto medium-cell-block-container">{props.children}</div>;
}

export default Container;
