import React, { useState } from 'react';
import './Program.css';
import Navi from '../Navi'
import SideNav from './SideNav';
import ProgramDisplay from './ProgramDisplay';

function Program() {
    
    const [state, setState] = useState("new");

    

    return (
        <div>
            <Navi />
            <div className='MPSideNavFlexBox'>
                <SideNav setDisplay={setState} />
                <div>
                    <ProgramDisplay displayState={state} />
                </div>
            </div>
        </div>

    )
}

export default Program;