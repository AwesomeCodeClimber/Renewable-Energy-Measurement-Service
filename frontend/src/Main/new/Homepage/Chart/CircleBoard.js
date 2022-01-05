import React from "react";
import { useState } from "react";
import Circle from "./Circle.js";
import boolSet from "./logic/BoolSet.js";


export default function CircleBoard (props) {

  const curPosition = props.curPosition;
  const animation_step = props.animation_step;

  const [curLeft, setLeft] = useState(curPosition.left);
  const [curTop, setTop] = useState(curPosition.top);
  const [curOpacity, setOpacity] = useState(props.curOpacity);
  const [circleStyle, setCircleStyle] = useState(props.circleStyle);
  const [percentage, setPercentage] = useState(props.percentage);
  const [size, setSize] = useState(props.size);
 
  const set_State = (setProps) => {
    setCircleStyle(setProps.circleStyle);
    setPercentage(setProps.percentage);
    setSize(setProps.size);

    var newPosition = setProps.newPosition;

    var delta = { left: (newPosition.left - curLeft) / animation_step,
                  top: (newPosition.top - curTop) / animation_step,
                  opacity: (setProps.newOpacity - curOpacity) / animation_step};

    var moveLeft = true;
    var moveTop = true;
    var changeOpacity = true;

    var left = curLeft;
    var top = curTop;
    var opacity = curOpacity;

    const intervalId = setInterval(() => {
      [moveLeft, moveTop, changeOpacity] = boolSet( newPosition.left, 
                                                    newPosition.top, 
                                                    setProps.newOpacity, 
                                                    delta, 
                                                    left, 
                                                    top, 
                                                    opacity);

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
    }, 10);
  };

  props.biRef.set_State = set_State;

  return (
    <>
      <Circle
        circleStyle = {circleStyle}
        percentage = {percentage}
        size = {size}
        left = {curLeft}
        top = {curTop}
        opacity = {curOpacity}
      />
    </>
  );
}