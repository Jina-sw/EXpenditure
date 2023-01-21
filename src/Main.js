import react from 'react';
import Button from 'react-bootstrap/Button'
import './App.css';
function Main(){
    return(
        <div>
            <div className="area">
                <div className="slogan">EXpenditure, <br></br>Your Best Finacial Support</div>
                <Button variant="warning" className="signButton">Sign In</Button>
            </div>
        </div>
    )
}

export default Main;