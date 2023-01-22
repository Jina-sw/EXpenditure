<<<<<<< Updated upstream
import { useContext, useState } from 'react';
=======
>>>>>>> Stashed changes
import MonitorEx from './MonitorEx';
import './Program.css';
<<<<<<< Updated upstream
import { calculateContext } from '../Contexts/calculateContext';
=======
import { useState } from 'react';
>>>>>>> Stashed changes

const MEXDisplay = () =>{
   

<<<<<<< Updated upstream
    // const { calculate } = useContext(calculateContext);
    const [fAmount, setFAmount] = useState(0);
    const [aAmount, setAAmount] = useState(0);
    const [rAmount, setRAmount] = useState(0);
    const [mAmount, setMAmount] = useState(0);
    const [total, setTotal] = useState(0);

    const calculateAmount = async () => {
        const url = "http://localhost:5000";
        const user = localStorage.getItem("username");
        const res = await axios.post(`${url}/expensesAmount`, {
            userId: user
        }).then(res => {
            setFAmount(res.data.food);
            setAAmount(res.data.clothes);
            setRAmount(res.data.rent);
            setMAmount(res.data.misc);
            setTotal(parseInt(res.data.tot));
            console.log(res.data.total);

        }).catch(err => {
            console.log(err);
        });
    };
=======

>>>>>>> Stashed changes

    

    return (
        <div className='MEXGrid'>
<<<<<<< Updated upstream
            <MonitorEx icon="Food" amount={fAmount} total={total} />
            <MonitorEx icon="Clothes" amount={aAmount} total={total} />
            <MonitorEx icon="Rent" amount={rAmount} total={total} />
            <MonitorEx icon="Misc" amount={mAmount} total={total} />
=======
            <MonitorEx icon="Food" amount="100.00" total="400.00"/>
            <MonitorEx icon="Clothes" amount="100.00" total="400.00"/>
            <MonitorEx icon="House" amount="100.00" total="400.00"/>
            <MonitorEx icon="Misc" amount="100.00" total="400.00"/>
>>>>>>> Stashed changes
        </div>
    );
};

export default MEXDisplay;