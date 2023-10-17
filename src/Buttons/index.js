import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    < span className="buttons" >
        {tasks.length > 0 && (
            <React.Fragment>
                 <button className="buttons__button ">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
            </React.Fragment>
        )}
    </span >
)
export default Buttons;