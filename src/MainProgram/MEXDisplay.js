import MonitorEx from './MonitorEx';
import './Program.css';

const MEXDisplay = () =>{
    return (
        <div className='MEXGrid'>
            <MonitorEx icon="Food" amount="100.00" total="400.00"/>
            <MonitorEx icon="Clothes" amount="100.00" total="400.00"/>
            <MonitorEx icon="House" amount="100.00" total="400.00"/>
            <MonitorEx icon="Misc" amount="100.00" total="400.00"/>
        </div>
    );
};

export default MEXDisplay;