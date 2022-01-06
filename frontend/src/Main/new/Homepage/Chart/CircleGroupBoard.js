import React, { useEffect, useState, useRef } from "react";


export default function CircleGroupBoard(props) {
    const hydroCircleWrapper = useRef();
    const solarCircleWrapper = useRef();
    const windCircleWrapper = useRef();
    const nonrCircleWrapper = useRef();


    useEffect(() => {
        if (props.percent.length) {

            props.percent.map((each, index) => {
                switch (Object.keys(each)[0]) {
                    case 'hydro':
                        drawAnimation(hydroCircleWrapper.current, 'hydro', Object.values(each)[0], index);
                        break;
                    case 'wind':
                        drawAnimation(windCircleWrapper.current, 'wind', Object.values(each)[0], index);
                        break;
                    case 'solar':
                        drawAnimation(solarCircleWrapper.current, 'solar', Object.values(each)[0], index);
                        break;
                    case 'nonr':
                        drawAnimation(nonrCircleWrapper.current, 'nonr', Object.values(each)[0], index);
                        break;
                    default:
                        break;
                }
            })
        }
    }, [props.percent])

    var leftWidths = [];
    const drawAnimation = (parentElement, classKey, percentSize, index) => {

        /** Draw Appearing Animation */

        let elemWidth;
        const overlap_width = window.innerWidth / 35;
        let left, top;
        let opacity = 0;
        let id = null;

        const element = parentElement.getElementsByClassName(`${classKey}-1`)[0];
        element.innerHTML = `${percentSize}<small>%</small>`;

        /**
         * Calculate the width and height of circle and assign width value by percent size
         */
        elemWidth = Math.sqrt(percentSize) * 63;
        elemWidth = elemWidth <= 150 ? elemWidth = 150 : elemWidth;

        element.style.width = (elemWidth) + "px";
        element.style.height = (elemWidth) + "px";
        element.style.lineHeight = (elemWidth) + "px";

        /**
         *  Calculate the starting point
         */

        switch (index) {
            case 0:
                top = 315; left = (window.innerWidth -  elemWidth) / 2;
                leftWidths.push((window.innerWidth -  elemWidth) / 2);
                break;
            case 1:
                top = 250; left = 100;
                leftWidths.push(leftWidths[0] - elemWidth + 100);
                break;
            case 2:
                top = 200; left = 50;
                break;
            case 3:
                top = 500; left = 25;
                break;
            default:
                break;
        }

        /**
         * Draw animation.
         */

        id = setInterval(appearFrame, 0.1);

        function appearFrame() {
            if (index == 0 && top == 0) {
                console.log(element);
                clearInterval(id);

            }
            else if (index == 0 && top > 0) {
                top -= 315 / 300;
                left == (window.innerWidth -  elemWidth) / 2;
                opacity += 1 / 300;
                element.style.opacity = opacity;
                element.style.top = top + "px";
                element.style.left = left + "px";
            }
            else if (index == 1 && top == 0) {
                clearInterval(id);
                element.className.replace(/.$/,"2")

            }
            else if (index == 1 && top > 0) {
                top -= 250 / 300;
                left += (leftWidths[0] - elemWidth + overlap_width - 100 ) / 300;

                opacity += 1 / 300;
                element.style.opacity = opacity;
                element.style.top = top + "px";
                element.style.left = left + "px";
            }
            else if (index == 2 && left >= (leftWidths[1] - elemWidth)) {
                clearInterval(id);
                element.className.replace(/.$/,"2")

            }
            else if (index == 2 && left < (leftWidths[1] - elemWidth)) {
                left += (leftWidths[1] - elemWidth -50) / 300;
                opacity += 1 / 300;
                element.style.opacity = opacity;
                element.style.left = left + "px";
            }
            else if (index == 3 && top <= 300) {
                clearInterval(id);
                element.className.replace(/.$/,"2")

            }
            else if (index == 3 && top > 300) {
                top -= 200 / 300;
                left += (leftWidths[0] - elemWidth ) / 300;
                opacity += 1 / 300;
                element.style.opacity = opacity;
                element.style.top = top + "px";
                element.style.left = left + "px";
            }

        }

        function disappearFrame() {

        }

    }







    return (
        <>
            <div className="hydro-circle-group" ref={hydroCircleWrapper} >
                <div className="hydro-1">

                </div>
                <div className="hydro-2">

                </div>
            </div>
            <div className="wind-circle-group" ref={windCircleWrapper} >
                <div className="wind-1">

                </div>
                <div className="wind-2">

                </div>
            </div>
            <div className="solar-circle-group" ref={solarCircleWrapper} >
                <div className="solar-1">

                </div>
                <div className="solar-2">

                </div>
            </div>
            <div className="nonr-circle-group" ref={nonrCircleWrapper} >
                <div className="nonr-1">

                </div>
                <div className="nonr-2">

                </div>
            </div>


        </>
    )
}