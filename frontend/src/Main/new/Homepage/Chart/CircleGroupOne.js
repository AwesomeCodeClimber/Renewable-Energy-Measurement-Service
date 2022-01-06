import React, { useState, useEffect, useRef } from 'react'


export default function CircleGroupOne(props) {

    const circleWrapper = useRef();
    useEffect(() => {
        if(props.percent.length) {
            console.log(circleWrapper.current);
        }
        
    }, [props.percent])


    return (
        <div className="circle-chart" ref={circleWrapper} >
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}
