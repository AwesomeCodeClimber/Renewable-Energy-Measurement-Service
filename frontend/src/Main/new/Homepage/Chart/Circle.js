import React from "react";
import "./Circle.css";

export default function  Circle (props) {
  const sizeStyle = {
    width: props.size + "px",
    height: props.size + "px",
    lineHeight: props.size + "px",
    left: props.left + "px",
    top: props.top + "px",
    opacity: props.opacity
  };
  return (
        <div
            className={props.circleStyle}
            style = {sizeStyle}
        >{props.percentage}</div>
  );
};
