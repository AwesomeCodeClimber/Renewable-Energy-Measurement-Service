import React, { useState, useEffect } from "react";
import CircleBoardCouple from "./CircleBoardCouple"
import calSize from "./logic/CalSize"
import CalPos from "./logic/CalPos"
import genPercentage from "./logic/GenPercentage"

export default function CircleBoardGroup (props) {

    
    function set_State(percent) {
        var percentageNumber = percent;
        var position = CalPos(percentageNumber);

        for (var i = 0; i < 4; i++) {
            biRef[i].set_State ({   position: position[i],
                                    opacity: opacity,
                                    circleStyle: initPrevCircleStyle[i],
                                    percentage: genPercentage(percentageNumber[i]),                        
                                    size: calSize(percentageNumber[i]) });
        };
    }
    
    useEffect(() => {

        if (props.status) {

            const initPrevCircleStyle = ["hydro-circle", "wind-circle", "solar-circle", "nonr-circle"];
            let initPrevPercentageNumber = props.energyPercent;
            let initPrevPercentage = initPrevPercentageNumber.map((item) => genPercentage(item));
            let initPrevSize = initPrevPercentageNumber.map((item) => calSize(item));
            let initPrevPos = CalPos(initPrevPercentageNumber);
            let originPos = [{ left: 100, top: 500 },
                                { left: 300, top: 500 },
                                { left: 500, top: 500 },
                                { left: 800, top: 500 }
                            ];
            var originOpacity = 0;
            var opacity = 0.85;
            var animation_step = 60;
            props.biRef.set_State = set_State;
            var myComponent = [];
            for (var i = 0; i < 4; i++) {
                myComponent[i] = <CircleBoardCouple  biRef = {biRef[i]}
                                                     originOpacity = {originOpacity}
                                                     animation_step = {animation_step}
                                                     originPos = {originPos[i]}
                                                     initPrevOpacity = {opacity}
                                                     initPrevPos = {initPrevPos[i]}
                                                     initPrevCircleStyle = {initPrevCircleStyle[i]}                          
                                                     initPrevPercentage = {initPrevPercentage[i]}
                                                     initPrevSize = {initPrevSize[i]} />
            };

            return (
                <>
                {myComponent[0]}
                {myComponent[1]}
                {myComponent[2]}
                {myComponent[3]}

                </>
            )
        }

    }, [props.status]);

    return (
        <>
        </>
    )
}