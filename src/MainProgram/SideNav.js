import { useState } from 'react';
import './SideNav.css';

const SideNav = (props) => {
    const [newExState, setNEState] = useState(true);
    const [editExState, setEEState] = useState(false);
    const [MonitorState, setMState] = useState(false);

    const functionClickHandler = (id) => {
        if (id == "1" && newExState != true) {
            setNEState(true);
            setEEState(false);
            setMState(false);
            props.setDisplay("new");
        }
        else if (id == "2" && editExState != true) {
            setNEState(false);
            setEEState(true);
            setMState(false);
            props.setDisplay("edit");
        }
        else if (id == "3" && MonitorState != true) {
            setNEState(false);
            setEEState(false);
            setMState(true);
            props.setDisplay("monitor");
        }
    };

    return (
        <div className="mainProgramSideNav">
            <div className={newExState ? "MPSideNavButtons MPSideNavButtonsSelected" : "MPSideNavButtons"}
                onClick={functionClickHandler("1")}>
                New Expenses
            </div>
            <div className={editExState ? "MPSideNavButtons MPSideNavButtonsSelected" : "MPSideNavButtons"}
                onClick={functionClickHandler("2")}>
                Edit Expenses
            </div>
            <div className={MonitorState ? "MPSideNavButtons MPSideNavButtonsSelected" : "MPSideNavButtons"}
                onClick={functionClickHandler("3")}>
                Monitor Spending
            </div>
        </div>
    );
};

export default SideNav;