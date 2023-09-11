import React, {useState} from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
    const [percentage, setPercentage] = useState(0);

    return (
        <div class="container">
            <div class="container-progress" style={{width: {percentage} + "%"}}>
                {percentage}
            </div>
        </div>
    );
};

export default ProgressBar;