import React, {useState} from "react";
import "./Modal.css";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div class="modalWrapper">
            <button class={"outbtn"} onClick={clickHandler}>CLICK</button>

            <div class={"modalBackground " + (isOpen ? "open" : "")}>fas</div>

            <div class={"modal-inner " + (isOpen ? "open" : "")}>
                <p>表示されましたか？</p>
                <button class="inbtn" onClick={clickHandler}>CLOSE</button>
            </div>
        </div>
    );
};

export default Modal;