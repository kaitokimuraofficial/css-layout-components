import React, {useState} from "react";
import "./Switch.css";

const Switch = () => {
    const [on, setOn] = useState(true);

    const clickHandler = () => {
        setOn(!on);
    }

    return (
        <>
            <div class={"switch " + (on ? "on" : "")} onClick={clickHandler}>
                <div class="switch-circle"></div>
            </div>

            <div class={"switch " + (on ? "" : "on")} onClick={clickHandler}>
                <div class="switch-circle"></div>
            </div>
        </>
    );
};

export default Switch;