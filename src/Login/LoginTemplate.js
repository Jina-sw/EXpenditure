import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Navi from '../Navi';
import react, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import './Login.css';
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../Contexts/LoginContext';

const Login = (props) => {

    //Login Context
    const { isLoggedIn, setLoggedIn } = useContext(LoginContext);

    //sign up credentials
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");

    //sign in credentials
    const [loginId, setLoginId] = useState("");
    const [loginPw, setLoginPw] = useState("");

    //Navigate constant
    const navigate = useNavigate();

    const loginHandler = () => {
        setLoggedIn(true);
        localStorage.setItem('login', 'true');
        localStorage.setItem('username', loginId);
        navigate("/");
    };


    const url = "http://localhost:5000/users";

    const onSignUpForm = async (e) => {
        e.preventDefault();

        let body1 = userId;
        let body2 = userPw;

        const response = await axios.post(url, {
            userId: body1,
            userPw: body2
        }).then(res => {
            if (res.data.message == "User exists!") {
                alert("User exists! Please try a different username");
                setUserId("");
                setUserPw("");
            } else {
                navigate("/signin");
                alert("Welcome! Successfully signed up using provided credentials. \n Redirecting to our sign -in page...");
            }
        }).catch(err => {
            console.log(err);
        })
    };

    const onSignInForm = async (e) => {
        e.preventDefault();

        let body1 = loginId;
        let body2 = loginPw;

        const login = await axios.get(url + `/${body1}`);
        console.log(login.data.userpw);
        if (login.data.userpw == body2) {
            loginHandler();
        } else if (login.data.message == "User does not exist") {
            alert("Incorrect username! Please check again");
        } else {
            alert("Incorrect password! Please check again");
        }

    };

    const signup = (
        <div>
            <Navi />
            <div className='SignInContainer'>
                <Form onSubmit={onSignUpForm}>
                    <h1 className='SignInHeading'>Sign Up</h1>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={userId}
                            onChange={e => setUserId(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={userPw}
                            onChange={e => setUserPw(e.target.value)} />
                    </Form.Group>
                    <Button type="submit" className="mb-2">
                        Sign Up
                    </Button>
                </Form>
            </div>
        </div>
    );

    const signin = (
        <div>
            <Navi />
            <div className='SignInContainer'>
                <Form onSubmit={onSignInForm}>
                    <h1 className='SignInHeading'>Sign In</h1>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={loginId}
                            onChange={e => setLoginId(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={e => setLoginPw(e.target.value)} />
                    </Form.Group>
                    <Button type="submit" className="mb-2">
                        Sign In
                    </Button>
                </Form>
            </div>
        </div>
    );


    return (
        <div>
            {props.data ? signin : signup}
        </div>
    );

};

export default Login;
