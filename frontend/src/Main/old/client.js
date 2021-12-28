import * as React from 'react'
import { Navbar, Container, Nav, Offcanvas, Form, FormControl, Button, Image } from 'react-bootstrap'

import Header from "../Header/header"
import Footer from "../Footer/footer";
import Cloud from "./cloud";


import phone from '../assets/img/iphone_mock.png'
import positive_1 from '../assets/img/cloud/designed/positive_0_0.png'
import positive_2 from '../assets/img/cloud/designed/positive_1_0.png'
import positive_3 from '../assets/img/cloud/designed/positive_2_0.png'
import negative_1 from '../assets/img/cloud/designed/negative_0_0.png'
import negative_2 from '../assets/img/cloud/designed/negative_1_0.png'
import negative_3 from '../assets/img/cloud/designed/negative_2_0.png'



function Client() {
    return (
        <div className="main_about">
            <Header />

            {/* Main Section */}
            <div className="about_section about-part">
                <div className="story_section">
                    <Container>
                        <span>Trusted by industry leaders</span>
                        <p>Join the energy transparency revolution you’re going to find yourself in great company! </p><br />
                        <p>Trusted by partners such as ABB, Seimens, Ericsson, Energy Austrlia and Asahi, renbloc is currently helping global companies lower thier carbon emissions - in real time!</p><br />
                        <p>Do you know what energy is powering your screens right now? Is it wind? Nuclear? Coal?</p><br />
                        <p>If you want to make the switch for a greener energy consumption you need to start by answering the question; what energy sources am I consuming right now?</p><br />
                        <p>At renbloc we grant you that insight through what we call energy transparency. We let you know exactly what energy source you're consuming, right now. Accurate down to a kilometer, allowing you to drastically reduce your carbon emissions. </p><br />
                        <p>We’re both very humbled and excited to be chosen to be trusted with this impotant task by so many big players! In collaboration with out clients we are currently lowering  both energy cost and emission with as much as 20%. </p><br />
                        <p>The energy future is bright, sustainable and renewable. Join us on this journey, and let us lower your carbon emissions - starting right now!  </p>
                    </Container>
                </div>

                {/* <div > */}
                    <img className="iphone" alt="iphone_mockup" src={phone} />
                {/* </div> */}

                {/* <div className="cloud_section">
                    <div className="positive_cloud_wrapper">
                        <img className="cloud positive_cloud" alt="positive_1" src={positive_1} />
                        <img className="cloud positive_cloud" alt="positive_2" src={positive_2} />
                        <img className="cloud positive_cloud" alt="positive_3" src={positive_3} />
                    </div>
                    <div className="negative_cloud_wrapper">
                        <img className="cloud negative_cloud" alt="negative_1" src={negative_1} />
                        <img className="cloud negative_cloud" alt="negative_2" src={negative_2} />
                        <img className="cloud negative_cloud" alt="negative_3" src={negative_3} />
                    </div>
                </div> */}
                <Cloud />

                <div className="offer_section">
                    <Container>
                        <h6>Ready to Get Started ?</h6>
                        <p>We offer different models tailored to our customers needs and individual energy transparency demands. Our smart, real-time API is essential for anyone wanting to take control of their energy emissions and its alway free to try!  </p>
                        <button className="start_btn">Start for Free</button>
                    </Container>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Client;