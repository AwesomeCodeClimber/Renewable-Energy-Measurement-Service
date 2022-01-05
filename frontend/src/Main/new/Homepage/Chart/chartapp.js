import React, { useEffect } from "react";
import CircleBoardGroup from "./CircleBoardGroup.js"


export default function App(props) {

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [props.percent])


    var biRef = {};
    var percent;

    const Allow = () => {
        percent = [(props.percent.sources.hydro * 100).toFixed(2),
            (props.percent.sources.wind * 100).toFixed(2),
            (props.percent.sources.solar * 100).toFixed(2),
            ((props.percent.sources.nuclear + props.percent.sources.unspecified) * 100).toFixed(2),
        ];

        biRef.set_State(percent);
    }

    useEffect(() => {
        if(props.percent == undefined) {
            console.log(props.percent);
            Allow();
        }
    }, [props.percent])

    return (
        <>
            <CircleBoardGroup biRef={biRef} />
        </>
    )
}