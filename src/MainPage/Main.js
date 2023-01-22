import react, { useContext } from 'react';
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap';
import '../App.css';
import './Main.css';
import Info from '../MainPage/Info.js'
import { LoginContext } from '../Contexts/LoginContext';


function Main() {

    const { isLoggedIn } = useContext(LoginContext);

    const loggedOut = (
        <LinkContainer to="/signin">
            <Button variant="warning" className="signButton">Sign In</Button>
        </LinkContainer>
    );

    const loggedIn = (
        <LinkContainer to="/mainprogram">
            <Button variant="warning" className="signButton">Try Our Program!</Button>
        </LinkContainer>
    );

    return (
        <div>
            <div className="area">
                <div className="slogan"><span className="HLLogo">EX</span>penditure, <br></br>Your Best Finacial Support</div>
                {isLoggedIn ? loggedIn : loggedOut}
            </div>
            <Info />
        </div>
    )
}

export default Main;