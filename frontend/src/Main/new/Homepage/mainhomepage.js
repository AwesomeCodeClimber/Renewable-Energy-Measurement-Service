import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import OfferSection from '../Public/offersection'
import Cloud from '../Public/cloud'
import Chart from './Chart/index'
import MyGoogleMap from './Map/googlemap'
import Alert from './alert'
import ResultBoard from './resultboard'


export default function MainHomepage() {
    return (
        <div className="homepage">

            <Alert />

            <Chart />

            <Container className="main-tool-board">
                <Row>
                    <Col sm="7" xs="12" xl="4">
                        <div className="map-wrapper">
                            <MyGoogleMap />
                        </div>
                    </Col>

                    <Col sm="7" xs="12" xl="4">
                        <div className="center-circle">
                            <p>
                            Checking exactly what energy<br/>
                            sources you are consuming in real<br/>
                            time, will enable you to drastically
                            reduce your energy emissions.<br/><br/>
                            Type in any city  in our tool to the<br/>
                            left, and try it for yourself!

                            </p>
                        </div>
                    </Col>
                    <Col sm="7" xs="12" xl="4">
                        <div className="result-board">
                            <ResultBoard />
                        </div>
                    </Col>
                </Row>

            </Container>

            {/* <Cloud /> */}

            <OfferSection />
        </div>
    )
}
