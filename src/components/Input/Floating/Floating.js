import React, {useState} from "react";
import "./Floating.css";

const Floating = () => {
    const [inputLabel, setInputLabel] = useState("");


    return (
        <div class="floating-label">
            <input value={inputLabel} onChange={(event) => {setInputLabel(event.target.value)}} placeholder="Placeholder" class="floating-label-input" />

            <label class="floating-label-label">{inputLabel}</label>
        </div>
    );
};

export default Floating;