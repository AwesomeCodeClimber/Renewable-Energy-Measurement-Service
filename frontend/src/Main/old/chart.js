import React from 'react'
import CircleBoard from './CircleBoard'
import SetSize from './chart/setSize'


function Chart(props) {

    // CircleBoard1's property

    // SetSize(props.data);

    var data = props.data;

    var biRef1 = {};
    var cur_state1 = {
        left: 300,
        top: 550,
        opacity: 0.7
    };
    var new_state1 = {
        left: 500,
        top: 235,
        opacity: 0
    };
    var animation_step1 = 100;
    console.log(data);
    // data ? 
    var circleStyle1 = `${Object.keys(data[0])}-circle`;
    var percentage1 = `${data[0](Object.values(data[0]))}`;
    var size1 = Math.sqrt(data[0][Object.values(data[0])]) * 63;

    // CircleBoard2's property
    var biRef2 = {};
    var cur_state2 = {
        left: 500,
        top: 500,
        opacity: 0
    };
    var new_state2 = {
        left: 300,
        top: 300,
        opacity: 0.7
    };
    var animation_step2 = 100;
    var circleStyle2 = "wind-circle";
    var percentage2 = "25%";
    var size2 = "300";

    // CircleBoard3's property
    var biRef3 = {};
    var cur_state3 = {
        left: 1200,
        top: 300,
        opacity: 0.7
    };
    var new_state3 = {
        left: 1000,
        top: 500,
        opacity: 0
    };
    var animation_step3 = 100;
    var circleStyle3 = "wind-circle";
    var percentage3 = "41.5%";
    var size3 = "400";

    // CircleBoard4's property
    var biRef4 = {};
    var cur_state4 = {
        left: 1000,
        top: 500,
        opacity: 0
    };
    var new_state4 = {
        left: 1200,
        top: 300,
        opacity: 0.7
    };
    var animation_step4 = 100;
    var circleStyle4 = "solar-circle";
    var percentage4 = "21.3%";
    var size4 = "200";


    return (
        <>
            <CircleBoard biRef={biRef1}
                cur_state={cur_state1}
                new_state={new_state1}
                animation_step={animation_step1}
                circleStyle={circleStyle1}
                percentage={percentage1}
                size={size1}
            />

            <CircleBoard biRef={biRef2}
                cur_state={cur_state2}
                new_state={new_state2}
                animation_step={animation_step2}
                circleStyle={circleStyle2}
                percentage={percentage2}
                size={size2} />

            <CircleBoard biRef={biRef3}
                cur_state={cur_state3}
                new_state={new_state3}
                animation_step={animation_step3}
                circleStyle={circleStyle3}
                percentage={percentage3}
                size={size3} />

            <CircleBoard biRef={biRef4}
                cur_state={cur_state4}
                new_state={new_state4}
                animation_step={animation_step4}
                circleStyle={circleStyle4}
                percentage={percentage4}
                size={size4} />

            {/* <CircleBoard biRef={biRef1}
                cur_state={cur_state1}
                new_state={new_state1}
                animation_step={animation_step1}
                circleStyle={circleStyle1}
                percentage={percentage1}
                size={size1}
            />

            <CircleBoard biRef={biRef2}
                cur_state={cur_state2}
                new_state={new_state2}
                animation_step={animation_step2}
                circleStyle={circleStyle2}
                percentage={percentage2}
                size={size2} />

            <CircleBoard biRef={biRef3}
                cur_state={cur_state3}
                new_state={new_state3}
                animation_step={animation_step3}
                circleStyle={circleStyle3}
                percentage={percentage3}
                size={size3} />

            <CircleBoard biRef={biRef4}
                cur_state={cur_state4}
                new_state={new_state4}
                animation_step={animation_step4}
                circleStyle={circleStyle4}
                percentage={percentage4}
                size={size4} /> */}
        </>
    )
}

export default Chart;