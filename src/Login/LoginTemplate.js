import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Navi from '../Navi';
import react, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import './Login.css';

const Login = (props) => {

    //sign up credentials
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");

    //sign in credentials
    const [loginId, setLoginId] = useState("");

    const onSignUpForm = async (e) => {
        console.log(userId);
        e.preventDefault();

        let body1 = userId;
        let body2 = userPw;

        const response = await axios.post("http://localhost:5000/users", {
            userId: body1,
            userPw: body2
        }).then(res => {
            console.log(res.data);

        }).catch(err => {
            console.log(err);
        })

        console.log("here " + response);



        setUserId("");

        //return false;
    };

    const onSignInForm = () => {

    };

    const signup = (
        <div>
            <Navi />
            <div className='SignInContainer'>
                <Form onSubmit={onSignUpForm}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter username" value={userId}
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
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter username" value={userId}
                            onChange={e => setLoginId(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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
