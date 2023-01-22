import { useContext, useState } from 'react';
import { calculateContext } from '../Contexts/calculateContext';
import './SideNav.css';
import axios from 'axios';

const SideNav = (props) => {
    const [newExState, setNEState] = useState(true);
    const [editExState, setEEState] = useState(false);
    const [MonitorState, setMState] = useState(false);

    const { calculate, setCalculate } = useContext(calculateContext);

    const calculateAmount = async () => {
        const url = "http://localhost:5000";
        const userId = localStorage.getItem("username");
        console.log(userId);
        const res = await axios.get(`${url}/expensesAmount/${userId}`);
        console.log(res.data.message);
        setCalculate({ ...calculate, fAmount: res.data.message });
    }

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
            calculateAmount();
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