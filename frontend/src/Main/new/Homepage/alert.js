import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import vector from '../../../assets/img/vector.png'

export default function Alert() {
    return (
        <Container fluid className="alert">
            <div className="alert-wrapper">
                <img className="vector" alt="vector" src={vector} />

                <div className="alert-text">.renbloc would like to use your location<br />to display the source of your energy.</div>
                <div className="btn-group">
                    <button className="alert-btn allow" >Allow</button>
                    <button className="alert-btn dismiss" >Dismiss</button>
                </div>
            </div>
        </Container>
    )
}
