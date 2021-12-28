import * as React from 'react'
import positive_1 from '../../../assets/img/cloud/designed/positive_0_0.png'
import positive_2 from '../../../assets/img/cloud/designed/positive_1_0.png'
import positive_3 from '../../../assets/img/cloud/designed/positive_2_0.png'
import negative_1 from '../../../assets/img/cloud/designed/negative_0_0.png'
import negative_2 from '../../../assets/img/cloud/designed/negative_1_0.png'
import negative_3 from '../../../assets/img/cloud/designed/negative_2_0.png'

export default function Cloud() {
    return (
        <div className="cloud-section">
            <div className="positive">
                <img className="cloud positive-cloud positive_1" alt="positive_1" src={positive_1} />
                <img className="cloud positive-cloud positive_2" alt="positive_2" src={positive_2} />
                <img className="cloud positive-cloud positive_3" alt="positive_3" src={positive_3} />
            </div>

            {/* <div className="negative">
                <img className="cloud negative-cloud" alt="negative_1" src={negative_1} />
                <img className="cloud negative-cloud" alt="negative_2" src={negative_2} />
                <img className="cloud negative-cloud" alt="negative_3" src={negative_3} />
            </div> */}
        </div>
    )
}