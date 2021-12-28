import React from "react";
import { useState } from "react";
import Circle from "./Circle.js";
import boolSet from "./logic/BoolSet.js";


export default function CircleBoard (props) {

  const cur_state = props.cur_state;

  const new_state = props.new_state;

  const animation_step = props.animation_step;

  var delta = { left: (new_state.left - cur_state.left) / animation_step,
                top: (new_state.top - cur_state.top) / animation_step,
                opacity: (new_state.opacity - cur_state.opacity) / animation_step};

  const [cur_left, setLeft] = useState(cur_state.left);
  const [cur_top, setTop] = useState(cur_state.top);
  const [cur_opacity, setOpacity] = useState(cur_state.opacity);

 
  const set_State = () => {
    var moveLeft = true;
    var moveTop = true;
    var changeOpacity = true;

    var left = cur_left;
    var top = cur_top;
    var opacity = cur_opacity;
   
    const intervalId = setInterval(() => {
      [moveLeft, moveTop, changeOpacity] = boolSet(new_state, delta, left, top, opacity);

      if (!moveLeft && !moveTop && !changeOpacity){
        clearInterval(intervalId);
      }
      else {
        if (moveLeft) {setLeft(prevleft => prevleft + delta.left);}
        if (moveTop) {setTop(prevtop => prevtop + delta.top);}
        if (changeOpacity) {setOpacity(prevopacity => prevopacity + delta.opacity);}

        left += delta.left;
        top += delta.top;
        opacity += delta.opacity;
      }
    }, 1);
  };

  props.biRef.set_State = set_State;

  return (
    <>
      <Circle
        circleStyle = {props.circleStyle}
        percentage = {props.percentage}
        size = {props.size}
        left = {cur_left}
        top = {cur_top}
        opacity = {cur_opacity}
      />
    </>
  );
}