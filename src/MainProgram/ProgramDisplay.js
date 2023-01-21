import { useState } from "react";

const ProgramDisplay = (props) => {

    return (
        <div>
            <h1>{props.displayState}</h1>
        </div>
    );
}

export default ProgramDisplay;