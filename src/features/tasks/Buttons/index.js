import React from "react";
import { StyledButtons,Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <StyledButtons>
        {tasks.length > 0 && (
            <React.Fragment>
                <Button onClick={toggleHideDone}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </React.Fragment>
        )}
   </StyledButtons>
)
export default Buttons;