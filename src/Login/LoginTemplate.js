import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Navi from '../Navi';
import react, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const Login = (props) => {

    const [userId, setUserId] = useState("");

    const onSubmitForm = async (e) => {
        console.log(userId);
        e.preventDefault();
        //e.stopPropagation();
        //e.nativeEvent.stopImmediatePropagation();
        
        let body1 = userId;
            //body1 = JSON.stringify(body1);
            //console.log(typeof JSON.stringify(body1));
        const response = await axios.post("http://localhost:5000/users", {
                userId: body1
            }).then(res=>{
                console.log(res.data);
                
            }).catch(err=> {
                console.log(err);
            })

            console.log("here " + response);
            
        

        setUserId("");

        //return false;
    }

    const signup = (
        <div>
            <Navi />
            
            <Form onSubmit={onSubmitForm}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={userId} 
                    onChange={e => setUserId(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button type="submit" className="mb-2">
                    Submit
                </Button>
            </Form>

            <form onSubmit={onSubmitForm}>
                <input type="text" value={userId} 
                    onChange={e => setUserId(e.target.value)}>
                </input>
                <button type="submit">submit</button>
            </form>
    
            
            
            
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup>

            <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                    https://example.com/users/
                </InputGroup.Text>
                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>With textarea</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
        </div>
    );

    const signin = (
        <div>
            <Navi />
            <InputGroup className='mb-3'>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup>

            <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                    https://example.com/users/
                </InputGroup.Text>
                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>With textarea</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
        </div>
    );


    return (
        <div>
            {props.data ? signup : signin}
        </div>
    );

};

export default Login;

{/* <Form>
                <InputGroup className='mb-3'>
                    <InputGroup.Text id="basic-addon1" >@</InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={userId} 
                        
                        onChange={e => setUserId(e.target.value)}
                        
                    />
                    <Button type="submit" onSubmit={onSubmitForm}>Submit</Button>
                    
                    
                </InputGroup>
            </Form> */}


            // try {
            //     let body1 = userId;
            //     //body1 = JSON.stringify(body1);
            //     //console.log(typeof JSON.stringify(body1));
            //     console.log(body1);
    
            //     const response = await fetch("http://localhost:5000/users", {
            //         method: "POST",
            //         headers: {"Content-Type":"application/json"},
            //         body: body1
            //     });
    
            //     console.log("here " + response);
                
            // } catch (err) {
            //     console.error("there err" + err.message);
            // }