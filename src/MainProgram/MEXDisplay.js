import { useContext, useState } from 'react';
import MonitorEx from './MonitorEx';
import axios from 'axios';
import './Program.css';
import { calculateContext } from '../Contexts/calculateContext';

const MEXDisplay = () => {

    const { calculate } = useContext(calculateContext);

    return (
        <div className='MEXGrid'>
            <MonitorEx icon="Food" amount={calculate.setFAmount} total="400.00" />
            <MonitorEx icon="Clothes" amount="100.00" total="400.00" />
            <MonitorEx icon="Rent" amount="100.00" total="400.00" />
            <MonitorEx icon="Misc" amount="100.00" total="400.00" />
        </div>
    );
};

export default MEXDisplay;