import React, { useState } from "react";
import "./RadicalProgress.css";

const RadicalProgress = () => {
    const [percentage, setPercentage] = useState(0);

    return (
        <div class="progress-bar-wrapper">
            <div class="progress-bar"
                style={{
                    background: `conic-gradient(pink ${percentage}%, transparent ${percentage}%)`
                }}>
                <progress
                    value={percentage} min="0" max="100"
                    style={{ visibility: "hidden", height: "0", width: "0" }}>
                    {percentage}%
                </progress>
            </div>
            <input min="0" max="100" type="number" value={percentage} onChange={
                (event) => setPercentage(event.target.value)
            } />
        </div>
    );
};

export default RadicalProgress;