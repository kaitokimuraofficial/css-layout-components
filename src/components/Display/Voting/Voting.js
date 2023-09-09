import React, {useState} from "react";
import "./Voting.css";

const Voting = (props) => {
    const [count, setCount] = useState(0)

    const countUp = () => {
        setCount(Math.min(props.max, count+1));
    };

    const countDown = () => {
        setCount(Math.max(props.min, count-1));
    };

    return (
        <>
            <div class="voting">
                <button class="voting-btn" onClick={countUp}>
                    <div class="voting-triangle voting-triangle--up"></div>
                </button>

                <div class="voting-number">{count}</div>

                <button class="voting-btn" onClick={countDown}>
                    <div class="voting-triangle voting-triangle--down"></div>
                </button>
            </div>

            <div class="flex-container">
                <div class="flex-item item1">アイテム1</div>
                <div class="flex-item item2">アイテム2アイテム2</div>
            </div>
        </>
    );
};

export default Voting;