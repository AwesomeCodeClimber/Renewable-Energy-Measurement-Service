import React, { useEffect, useState } from "react";
import CircleBoardGroup from "./CircleBoardGroup.js"


export default function App(props) {
    const [status, setStatus] = useState(false);

    var biRef = {};
    var energyPercent;

    const Allow = () => {
        energyPercent = [(props.percent.sources.hydro * 100).toFixed(2),
            (props.percent.sources.wind * 100).toFixed(2),
            (props.percent.sources.thermal * 100).toFixed(2),
            ((props.percent.sources.nuclear + props.percent.sources.unspecified) * 100).toFixed(2),
        ];
        console.log(energyPercent)

        biRef.set_State(energyPercent);
    }

    useEffect(() => {
        if(Object.keys(props.percent).length) {
            Allow();
            setStatus(true);
        }
    }, [props.percent])

    return (
        <>
            <CircleBoardGroup biRef={biRef} status={status} energyPercent={energyPercent} />
        </>
    )
}