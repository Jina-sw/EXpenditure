import './Program.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import NewEx from './NewEx';
import EditEx from './EditEx';
import MEXDisplay from './MEXDisplay';

const ProgramDisplay = (props) => {
    


    let display;

    if (props.displayState == "new") {
        // setDisplay(newEx);
        display = <NewEx/>;
    } else if (props.displayState == "edit") {
        // setDisplay(editEx);
        display = <EditEx/>;
    } else {
        // setDisplay(monitorEx);
        display = <MEXDisplay/>;
    }

    return (
        <div className="PD_Container">
            <main className="PD_Content">
                {display}
            </main>
            <footer className="PD_Footer">

            </footer>
        </div>
    );
}

export default ProgramDisplay;