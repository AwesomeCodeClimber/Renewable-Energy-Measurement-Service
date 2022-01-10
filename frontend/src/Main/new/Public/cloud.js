import React, { useState, useEffect, useRef } from 'react'

import positive_1 from '../../../assets/img/cloud/designed/positive_0_0.png'
import positive_2 from '../../../assets/img/cloud/designed/positive_1_0.png'
import positive_3 from '../../../assets/img/cloud/designed/positive_2_0.png'
import negative_1 from '../../../assets/img/cloud/designed/negative_0_0.png'
import negative_2 from '../../../assets/img/cloud/designed/negative_1_0.png'
import negative_3 from '../../../assets/img/cloud/designed/negative_2_0.png'

export default function Cloud(props) {
    const positiveFst = useRef();
    const positiveSnd = useRef();
    const positiveTrd = useRef();
    const negativeFst = useRef();
    const negativeSnd = useRef();
    const negativeTrd = useRef();


    useEffect(() => {

        /** Normal Animation */
        if (props.percent) {
            if (props.percent.length && props.percent[0] && Object.keys(props.percent[0])[0] == 'nonr' && Object.values(props.percent[0]) > 50) {
                // console.log(positiveAnimatedElements)
                // positiveAnimatedElements.map((each, index) => {
                //     each.pause();
                //     console.log(getComputedStyle(positiveSnd.current).getPropertyValue('left'))
                // })
            }
        }

    }, [props.percent])

    
    return (
        <div className="cloud-section">
            <div className="positive">
                <img className="cloud positive-cloud positive_1"  alt="positive_1" src={positive_3} ref={positiveFst} />
                <img className="cloud positive-cloud positive_2" alt="positive_2" src={positive_2} ref={positiveSnd} />
                <img className="cloud positive-cloud positive_3" alt="positive_3" src={positive_3} ref={positiveTrd} />
            </div>

            <div className="negative">
                {/* <img className="cloud negative-cloud" alt="negative_1" src={negative_1} ref={negativeFst}/> */}
                {/* <img className="cloud negative-cloud" alt="negative_2" src={negative_2} ref={negativeSnd} style={{ animation: `appear 1.5s linear ` }} /> */}
                {/* <img className="cloud negative-cloud" alt="negative_3" src={negative_3} ref={negativeTrd}/> */}
            </div>
        </div>
    )
}