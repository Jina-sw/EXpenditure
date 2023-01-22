import react from 'react';
import first from '../assets/first.png'



function info() {
    return (
        <div className="infoBG">
            <br/>
            <div className="b">How much did you spend last month?</div>
            <p className="intro">....If you don't know how much you spent, this is the right time to track your money</p>
            <br></br>
            <div className="content_container">
            <p className="content_title">Here Is What We Offer For You</p>
                <div className="drawer">
                    <p className="content_title">Firstly,<br/> click on one of the buttons at the right top</p>
                    <img src={first} width="80%"></img>
                </div>

                <div className="drawer">
                    <p className="content_title"><br/> Next, sign in or newly sign up to start <span>EXpenditure</span></p>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default info;