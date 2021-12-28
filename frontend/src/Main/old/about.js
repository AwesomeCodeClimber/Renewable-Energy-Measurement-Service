import * as React from 'react'
import { Navbar, Container, Nav, Offcanvas, Form, FormControl, Button, Image } from 'react-bootstrap'

import Header from "../Header/header"
import Footer from "../Footer/footer";
import Cloud from "./cloud"




function About() {
    return (
        <div className="main_about">
            <Header />

            {/* Main Section */}
            <div className="about_section about-part">
                <div className="story_section">
                    <Container>
                        <span>The Story of Renbloc</span>
                        <p>The idea for RenBloc was sprung over a kitchen table in the winter of 2018. </p><br />
                        <p>Founders Gustaf Svensson and Nils Söderström saw that they both had bought “100% green energy” but there was no way to verifying, nor ceritfynig that claim.</p><br />
                        <p>Even worse, we had no way of actively lowering our energy footprint, nor make a switch for a more renewable consumption</p><br />
                        <p>We set out to change this – empowering consumers to freely choose their type of energy – changing the market forever!</p><br />
                        <p>Since then we have partnered with energy, manufacturing and real estate companies, helping them all to get a better understadning of energy and energy emission.</p><br />
                        <p>We let consumers know exactly what type of energy they consume - in real time. </p><br />
                        <p>This is what we call energy transparency. </p>
                    </Container>
                </div>

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

export default About;