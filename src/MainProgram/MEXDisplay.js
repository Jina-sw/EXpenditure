import { useState } from 'react';
import MonitorEx from './MonitorEx';
import axios from 'axios';
import './Program.css';

const MEXDisplay = () => {

    const [foodAmount, setFAmount] = useState(0);
    const [ApAmount, setApAmount] = useState(0);
    const [HouseAmount, setHouseAmount] = useState(0);
    const [MiscAmount, setMiscAmount] = useState(0);
    const [totalAmount, setTotal] = useState(0);

    const calculateAmount = async () => {
        const url = "http://localhost:5000";
        const userId = localStorage.getItem("username");
        console.log(userId);
        const res = await axios.get(url + "/expensesAmount/" + userId);
        console.log(res.data.message);
        setFAmount(res.data.message);
    }

    calculateAmount();

    return (
        <div className='MEXGrid'>
            <MonitorEx icon="Food" amount={foodAmount} total="400.00" />
            <MonitorEx icon="Clothes" amount="100.00" total="400.00" />
            <MonitorEx icon="Rent" amount="100.00" total="400.00" />
            <MonitorEx icon="Misc" amount="100.00" total="400.00" />
        </div>
    );
};

export default MEXDisplay;