import react from 'react';
import Button from 'react-bootstrap/Button'
import '../App.css';
import './Main.css';
import Info from '../MainPage/Info.js'
function Main(){
    return(
        <div>
            <div className="area">
                <div className="slogan">EXpenditure, <br></br>Your Best Finacial Support</div>
                <Button variant="warning" className="signButton">Sign In</Button>
                
            </div>
            <Info/>
        </div>
    )
}

export default Main;