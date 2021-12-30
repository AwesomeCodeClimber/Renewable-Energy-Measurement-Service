import React from 'react'


export default function ResultBoard() {
    return (
        <div className="result">
            <div className="result-label">
                <p>
                    Your result:
                </p>
            </div>

            <div className="chart-board">
                <div className="score">
                    <div className="score-text">
                        <h3>
                            Your green energy score
                        </h3>
                        <span>90 %</span>
                    </div>
                    <p>
                        *result within 1 km radar
                    </p>
                </div>
                <div id="chart">

                </div>
            </div>
        </div>
    )
}