import { useState } from 'react';
import './SideNav.css';

const SideNav = (props) => {
    const [newExState, setNEState] = useState(true);
    const [editExState, setEEState] = useState(false);
    const [MonitorState, setMState] = useState(false);

    const NewEXClickHandler = () => {
        if (newExState != true) {
            setNEState(true);
            setEEState(false);
            setMState(false);
            props.setDisplay("new");
        }
    };
    const EditExHandler = () => {
        if (editExState != true) {
            setNEState(false);
            setEEState(true);
            setMState(false);
            props.setDisplay("edit");
        }
    };
    const MonitorHandler = () => {
        if (MonitorState != true) {
            setNEState(false);
            setEEState(false);
            setMState(true);
            props.setDisplay("monitor");
        }
    };

    return (
        <div className="mainProgramSideNav">
            <div className={newExState ? "MPSideNavButtons MPSideNavButtonSelected" : "MPSideNavButtons"}
                onClick={NewEXClickHandler}>
                New Expenses 
                {/* {newExState ? "true" : "false"} */}
            </div>
            <div className={editExState ? "MPSideNavButtons MPSideNavButtonSelected" : "MPSideNavButtons"}
                onClick={EditExHandler}>
                Edit Expenses
            </div>
            <div className={MonitorState ? "MPSideNavButtons MPSideNavButtonSelected" : "MPSideNavButtons"}
                onClick={(MonitorHandler)}>
                Monitor Spending
            </div>
        </div>
    );
};

export default SideNav;