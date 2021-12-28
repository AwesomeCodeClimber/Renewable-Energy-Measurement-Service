import * as React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import { Navbar, Container, Nav, Offcanvas, Form, FormControl, Button, Image } from 'react-bootstrap'
import { GoogleMap, useJsApiLoader, LoadScript, Marker, StandaloneSearchBox, Autocomplete } from '@react-google-maps/api'

import Header from "../Header/header"
import Footer from "../Footer/footer"
import Cloud from "./cloud"
import Chart from "./chart"
import vector from "../assets/img/vector.png"

/*** Setting for Google Map */
const google = window.google = window.google ? window.google : {}

const containerStyle = {
    width: '80%',
    height: '70%',
    border: "3px solid #B8CCD9",
    boxSizing: "border-box",
    borderRadius: "50px",
};

const center = {
    lat: 59.3294,
    lng: 18.0686
};


/** Main Homepage Function */
function Homepage() {

    /** Google Map */
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        // googleMapsApiKey: "js?key=&callback=initMap"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const defaultMapOptions = {
        fullscreenControl: false,
    };

    /** Chart */
    const [result, setResult] = useState("");
    const drawChart = async () => {

        let result_percent = {};
        let obj = {
            headers: {
                Authorization: "44f0245f0c2437dd47bf01f236cf2d1ead5f1262",
                x: 11,
                y: 59
            }
        }

        await axios.get("http://localhost:3005/data", obj)
            .then(res => {
                if (res.status == 200) {
                    result_percent = res.data;
                }
                else {
                    alert("Error");
                }
            })

        sortData(result_percent.sources);

    }

    const sortData = (data) => {

        /** Sort Data */
        let hydro_pcnt = Number((data.hydro * 100).toFixed(2));
        let wind_pcnt = Number((data.wind * 100).toFixed(2));
        let solar_pcnt = Number((data.thermal * 100).toFixed(2));
        let nonr_pcnt = Number(((data.unspecified + data.nuclear) * 100).toFixed(2));
        const _ordered = [{ hydro: hydro_pcnt }, { wind: wind_pcnt }, { solar: solar_pcnt }, { nonr: nonr_pcnt }];
        _ordered.sort(function (a, b) {
            return Object.values(a)[0] - Object.values(b)[0];
        }).reverse();

        setResult(_ordered);
        // drawChartMount(_ordered);
    }

    React.useEffect(() => {

        /** API communication and received data */
        const result_percent = {
            "final_index": 27.0,
            "X": 11.0,
            "Y": 59.0,
            "sources": {
                "nuclear": 0.5891518866660008,
                "thermal": 0.1270960806183084,
                "wind": 0.14434107676742794,
                "unspecified": 0.013718200465149077,
                "hydro": 0.12569275548311382,
            }
        }

        /** When mounting component, percent chart... */
        sortData(result_percent.sources);

    }, []);

    const dismissAlert = () => {

    }

    return (
        <div className="main_homepage">

            <Header />

            <div className="about_section">
                <div className="alert_modal_wrapper">
                    <div className="alert_modal">
                        <img className="vector" alt="vector" src={vector} />

                        <div className="alert_text">.renbloc would like to use your location<br />to display the source of your energy.</div>
                        <div className="btn_group">
                            <button className="alert_btn allow_btn" onClick={drawChart}>Allow</button>
                            <button className="alert_btn dismiss_btn" onClick={dismissAlert}>Dismiss</button>
                        </div>
                    </div>
                </div>

                <div className="bubble_chart">
                    <div className="location_text">
                        <h5>Location</h5>
                        <h1>Stockholm, Sweden</h1>
                        <span>Live update</span>
                    </div>
                    <div className="bubble_part">
                        <div id="chart">
                            {/* <div className="appear-chart">
                                <div className="hydro-circle">
                                </div>
                                <div className="wind-circle">
                                </div>
                                <div className="solar-circle">

                                </div>
                                <div className="nonr-circle">
                                </div>
                            </div>
                            <div className="remove-chart">
                                <div className="hydro-remove-circle">
                                </div>
                                <div className="wind-remove-circle">
                                </div>
                                <div className="solar-remove-circle">

                                </div>
                                <div className="nonr-remove-circle">
                                </div>
                            </div> */}
                            <Chart
                                data={result}
                            />


                            <div className="chart-legend">
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
                                    <div className="nonr-dot dot"></div><span>Nonr power</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="location_part">
                    <div className="container-fluid">
                        <div className="google_map">
                            {isLoaded &&
                                (
                                    <>
                                        <GoogleMap
                                            mapContainerStyle={containerStyle}
                                            center={center}
                                            zoom={10}
                                            onLoad={onLoad}
                                            onUnmount={onUnmount}
                                            options={defaultMapOptions}
                                        ></GoogleMap>
                                    </>
                                )
                            }
                        </div>
                        <div className="result_circle">
                            <p className="circle-letter">
                                Checking exactly what energy
                                sources you are consuming in <strong>real
                                    time</strong>, will enable you to drastically
                                reduce your energy emissions.<br /><br />

                                Type in any city  in our tool to the
                                left, and try it for yourself!
                            </p>
                        </div>
                        <div className="search_result">
                            <p className="result_label">Your result:</p>
                            <div className="result_board">
                                <div className="letter-container">
                                    <h5>Your green energy score</h5>
                                    <p className="percent_result">90%</p>
                                </div>
                                <p>*result within 1 km radar</p>
                                <div id="result_chart"></div>
                            </div>
                        </div>
                    </div>

                    <Cloud />

                    <div className="circle-part">
                        <div className="big-circle">
                            <p className="big-circle-letter">
                                In order to make the switch to a a more greener energy consumption, we need to start by asking this very question:<br /><br />

                                <b>What energy am I<br />
                                    consuming right now?</b>
                            </p>
                        </div>
                        <div className="small-circle">
                            <b>Tip of the day!</b><br /><br />
                            <p>For a solar powered lunch, hold of heating it till 12:30.</p>
                        </div>
                    </div>
                </div>


                <div className="offer_section">
                    <div className="container">
                        <h6>Ready to Get Started ?</h6>
                        <p className="offer-letter">We offer different models tailored to our customers needs and individual energy transparency demands. Our smart, real-time API is essential for anyone wanting to take control of their energy emissions and its alway free to try!  </p>
                        <button className="start_btn">Start for Free</button>
                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}





export default React.memo(Homepage);