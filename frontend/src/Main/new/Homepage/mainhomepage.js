import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import OfferSection from '../Public/offersection'
import Cloud from '../Public/cloud'
import Chart from './Chart/index'
import MyGoogleMap from './Map/googlemap'
import Alert from './alert'
import ResultBoard from './resultboard'


export default function MainHomepage() {
    const [center, setCenter] = useState({ lat: 59.3293, lng: 18.0686 });
    const [alertstate, setAlertState] = useState(true);

    const allowState = (_allow_state) => {
        console.log("-------------------->")
        setAlertState(_allow_state);
    }

    const changeLocation = (_center_changed) => {
        setCenter(_center_changed);
    }


    return (
        <div className="homepage">

            <Alert allowState={allowState} />

            <Chart center={center} status={alertstate} />

            <Container className="main-tool-board">
                <Row>
                    <Col xl="4" sm="9" xs="12" >
                    {/* <div className="map-grid"> */}

                        <div className="map-wrapper">
                            <MyGoogleMap changeLocation={changeLocation} />
                        </div>
                    {/* </div> */}
                    </Col>

                    <Col xl="4" sm="9" xs="12" >
                    {/* <div className="map-grid"> */}

                        <div className="center-circle">
                            <p>
                                Checking exactly what energy<br />
                                sources you are consuming in real<br />
                                time, will enable you to drastically
                                reduce your energy emissions.<br /><br />
                                Type in any city  in our tool to the<br />
                                left, and try it for yourself!

                            </p>
                        </div>
                    {/* </div> */}
                    </Col>
                    <Col xl="4" sm="9" xs="12" >
                    {/* <div className="map-grid"> */}

                        <div className="result-board">
                            <ResultBoard />
                        </div>
                    {/* </div> */}
                    </Col>
                </Row>

                <Row>
                    <Col >
                        <div className="big-circle">
                            <p>
                                In order to make the switch to a a more<br /> greener energy consumption, we need to<br /> start by asking this very question:<br /><br />
                                <b>
                                    What energy am I
                                    consuming right now?
                                </b>
                            </p>
                        </div>
                    </Col>
                    <Col className="small-circle-wrapper">
                        <div className="small-circle">
                            <p>
                                <b>
                                    Tip of the day!
                                </b><br />
                                For a solar powered lunch,
                                hold of heating it till 12:30.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* <Cloud /> */}

            <OfferSection />
        </div>
    )
}
