import React from "react";
import CircleBoard from "./CircleBoard.js"


export default function CircleBoardCouple(props) {

    var biRef0 = {};
    var biRef1 = {};

    var flag = true;

    var originOpacity = props.originOpacity;
    var animation_step = props.animation_step;
    var originPos = props.originPos;
    var prevPos = props.initPrevPos;
    var prevOpacity = props.initPrevOpacity;
    var prevCircleStyle = props.initPrevCircleStyle;
    var prevPercentage = props.initPrevPercentage;
    var prevSize = props.initPrevSize;

    var circleStyle, percentage, size;

    function set_State(setProps) { 

        if (flag) {
            biRef0.set_State({  newPosition: setProps.position, 
                                newOpacity: setProps.opacity, 
                                circleStyle: setProps.circleStyle,
                                percentage: setProps.percentage,
                                size: setProps.size });

            biRef1.set_State({  newPosition: props.originPos,
                                newOpacity: originOpacity,
                                circleStyle: prevCircleStyle,
                                percentage: prevPercentage,
                                size: prevSize });
            flag = false;
        } else {
            biRef0.set_State({  newPosition: props.originPos,
                                newOpacity: originOpacity,
                                circleStyle: prevCircleStyle,
                                percentage: prevPercentage,
                                size: prevSize });

            biRef1.set_State({  newPosition: setProps.position, 
                                newOpacity: setProps.opacity, 
                                circleStyle: setProps.circleStyle,
                                percentage: setProps.percentage,
                                size: setProps.size });
            flag = true;
        }

        prevPos = setProps.position;
        prevOpacity = setProps.opacity;
        prevCircleStyle = setProps.circleStyle;
        prevPercentage = setProps.percentage;
        prevSize = setProps.size;
    };

    props.biRef.set_State = set_State;
 
    return <div className="component-app">
        <CircleBoard biRef={biRef0}
                     curPosition = {originPos}
                     curOpacity = {originOpacity}
                     animation_step = {animation_step}
                     circleStyle = {circleStyle}
                     percentage = {percentage}
                     size = {size}/>

        <CircleBoard biRef={biRef1}
                     curPosition = {prevPos}
                     curOpacity = {prevOpacity}
                     animation_step = {animation_step}
                     circleStyle = {prevCircleStyle}
                     percentage = {prevPercentage}
                     size = {prevSize}/>
    </div>;
 }