import * as React from 'react'
import vector from "../assets/img/vector.png"

function Alert() {
    return (
        <div className="alert_modal_wrapper">
            <div className="alert_modal">
                <img className="vector" alt="vector" src={vector} />

                <div className="alert_text">.renbloc would like to use your location<br />to display the source of your energy.</div>
                <div className="btn_group">
                    <button className="alert_btn allow_btn" onClick={appearChart}>Allow</button>
                    <button className="alert_btn dismiss_btn" onClick={dismissAlert}>Dismiss</button>
                </div>
            </div>
        </div>
    )
}

export default Alert;