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

            <Container >
                <Row>
                    <Col>
                        <div className="map-wrapper">
                            <MyGoogleMap />
                        </div>
                    </Col>
                    
                    <Col>

                    </Col>
                    <Col>
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
