import react from 'react';
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap';
import '../App.css';
import './Main.css';
import Info from '../MainPage/Info.js'
function Main() {
    return (
        <div>
            <div className="area">
                <div className="slogan"><span className="HLLogo">EX</span>penditure, <br></br>Your Best Finacial Support</div>
                <LinkContainer to="/signin">
                    <Button variant="warning" className="signButton">Sign In</Button>
                </LinkContainer>

            </div>
            <Info />
        </div>
    )
}

export default Main;