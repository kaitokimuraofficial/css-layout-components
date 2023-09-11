import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
    const [length, setLength] = useState(0);

    
    return (
        <div class="slider">
            <div class="slider-left" style={{width: {length}}}></div>
            <div class="slider-circle"></div>
            <div class="slider-right" ></div>
        </div>
    );
};

export default Slider;