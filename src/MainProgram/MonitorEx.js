import './Program.css';
import { GiClothesline } from 'react-icons/gi';
import { GiFoodTruck } from 'react-icons/gi';
import { GiBlockHouse } from 'react-icons/gi';
import { MdMiscellaneousServices } from 'react-icons/md';

const MonitorEx = (props) => {
    let icon;

    if (props.icon == "Food") {
        icon = <GiFoodTruck className='MEXIcon' />;
    } else if (props.icon == "Clothes") {
        icon = <GiClothesline className='MEXIcon' />;
    } else if (props.icon == "House") {
        icon = <GiBlockHouse className='MEXIcon' />;
    } else {
        icon = <MdMiscellaneousServices className='MEXIcon' />;
    }

    return (
        <div className='MEXCard'>
            <h1 className='MEXHeading'>
                {props.icon}
            </h1>
            {icon}
            <div>
                <h2 className='MEXPricings'>
                    {`$ ${props.amount}`}
                </h2>
                <h2 className='MEXPricings'>
                    {`${(props.amount / props.total) * 100} % of the total expense`}
                </h2>
            </div>
        </div>
    );
}

export default MonitorEx;