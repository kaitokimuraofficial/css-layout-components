import React, {useState} from "react";
import "./Drawer.css";

const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const isOpenHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={isOpen ? "open" : ""} id="navArea">
                <nav>
                    <div class="inner">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Detail</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>

                <div class="toggle-btn" onClick={isOpenHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div id="mask" onClick={isOpenHandler}></div>
            </div>

            <main>
                <h1>Hamburger Menu</h1>
            </main>
        </>
    );
};

export default Drawer;