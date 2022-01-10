import React, { useState, useEffect, useRef } from 'react'

import positive_1 from '../../../assets/img/cloud/designed/positive_0_0.png'
import positive_2 from '../../../assets/img/cloud/designed/positive_1_0.png'
import positive_3 from '../../../assets/img/cloud/designed/positive_2_0.png'

import negative_1 from '../../../assets/img/cloud/designed/negative_1_0.png'
import negative_2 from '../../../assets/img/cloud/designed/negative_1_0.png'
import negative_3 from '../../../assets/img/cloud/designed/negative_1_0.png'

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
                positiveNormalAnimation();
            }
        }

    }, [props.percent])

    const positiveAppearAnimation = () => {

    }

    const positiveNormalAnimation = () => {
        positiveFst.current.animate(
            [
                { left: '0', transform: 'rotate(0deg)', opacity: 1 },
                { left: '100%', transform: 'rotate(30deg)' , opacity: 1},
                { left: '0', transform: 'rotate(0deg)', opacity: 1 }
            ],
            {
                duration: 300000,
                iterations: Infinity,
                fill: 'forwards',
            }
        )

        positiveSnd.current.animate(
            [
                { left: '50%', transform: 'rotate(0)', opacity: 1  },
                { left: '100%', transform: 'rotate(180deg)', opacity: 1  },
                { left: '50%', transform: 'rotate(360deg)', opacity: 1  },
                { left: '0%', transform: 'rotate(180deg)', opacity: 1  },
                { left: '50%', transform: 'rotate(0)', opacity: 1  },
            ],
            {
                duration: 300000,
                iterations: Infinity,
                fill: 'forwards',
            }
        )

        positiveTrd.current.animate(
            [
                { right: '0', transform: 'rotate(0deg)' , opacity: 1 },
                { right: '100%' , transform: 'rotate(30deg)', opacity: 1 },
                { right: '0', transform: 'rotate(0deg)' , opacity: 1 }
            ],
            {
                duration: 300000,
                iterations: Infinity,
                fill: 'forwards',
            }
        )
    }

    return (
        <div className="cloud-section">
            <div className="positive">
                <img className="cloud positive-cloud positive_1" alt="positive_1" src={positive_3} ref={positiveFst} />
                <img className="cloud positive-cloud positive_2" alt="positive_2" src={positive_2} ref={positiveSnd} />
                <img className="cloud positive-cloud positive_3" alt="positive_3" src={positive_3} ref={positiveTrd} />
            </div>

            <div className="negative">
                <img className="cloud negative-cloud" alt="negative_1" src={negative_1} ref={negativeFst} />
                <img className="cloud negative-cloud" alt="negative_2" src={negative_2} ref={negativeSnd} />
                <img className="cloud negative-cloud" alt="negative_3" src={negative_3} ref={negativeTrd} />
            </div>
        </div>
    )
}