import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Chart() {
    return (
        <Container fluid className="chart-wrapper">
            <div className="location container">
                <p>Location</p>
                <h3>Stockholm, Sweden</h3>
                <span>Live update</span>
            </div>
            
            <div className="chart">
                <Row className="chart-row">
                    <Col md="9">
                        <div className="chart-area">
                            {/* Chart Here */}
                        </div>
                    </Col>
                    <Col className="legend-column">
                        <div className="chart-legend container">
                            <div className="hydro-legend legend">
                                <div className="hydro-dot dot"></div><span>Hydro power</span>
                            </div>
                            <div className="wind-legend legend">
                                <div className="wind-dot dot"></div><span>Wind power</span>
                            </div>
                            <div className="solar-legend legend">
                                <div className="solar-dot dot"></div><span>Solar power</span>
                            </div>
                            <div className="nonr-legend legend">
                                <div className="nonr-dot dot"></div><span>Non-renewable sources</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
