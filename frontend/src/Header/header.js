import * as React from 'react'
import { Link } from "react-router-dom";
import { Fade } from 'react-slideshow-image';
import { Navbar, Container, Nav } from 'react-bootstrap';

import first from '../assets/img/header/default_bg.png'
import second from '../assets/img/header/default_bg_dark_small.png'
import 'react-slideshow-image/dist/styles.css';
import { ReactComponent as LogoIcon } from '../assets/img/logo.svg';

const fadeImages = [
    {
        url: first,
        caption: 'First Slide'
    },
    {
        url: second,
        caption: 'Second Slide'
    },
];
function Header() {
    return (
        <div className="header">
            <Navbar expand="sm" bg="transparent" variant="transparent" >
                <Container>
                    <Nav>
                        <Link to="/home">
                            <span className='navbar-link'>Homepage</span>
                        </Link>
                        <Link to="/about" >
                            <span className='navbar-link'>About</span>
                        </Link>
                        <Link to="/client" >
                            <span className='navbar-link'>Client & Partners</span>
                        </Link>
                        <Link to="/" >
                            <span className='navbar-link'>News</span>
                        </Link>
                    </Nav>
                </Container>
                <LogoIcon className="logo" />
            </Navbar>

            {/* Background Image Carousel */}
            <div className="slide-container">
                <Fade duration={3000} arrows={false} infinite={true}>
                    {fadeImages.map((fadeImage, index) => (
                        <div className="each-fade" key={index}>
                            <div className="image-container">
                                <img src={fadeImage.url} />
                            </div>
                        </div>
                    ))}
                </Fade>
            </div>

            <div className="header-text">
                <h1>
                    THE FUTURE <small>IS</small>  <br /> BRIGHT, <br /> SUSTAINABLE <small>AND</small> <br /> RENEWABLE
                </h1>
            </div>

        </div>
    )
}

export default Header;