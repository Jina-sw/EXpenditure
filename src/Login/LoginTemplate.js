import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Navi from '../Navi';
import react, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Login = (props) => {

    const [userId, setUserId] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { userId }
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });

            console.log("here" + response);
            
        } catch (err) {
            console.error("here err" + err.message);
        }
    }

    const signup = (
        <div>
            <Navi />
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