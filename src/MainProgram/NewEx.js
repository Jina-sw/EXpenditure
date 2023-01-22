import './Program.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';

const NewEx = () => {

    const [amountNum, setAmountNum] = useState(0);

    const onSubmitForm = async (e) => {
        console.log(amountNum);
        e.preventDefault();
     
       
            
        const response = await axios.post("http://localhost:5000/expenses", {
                amount: amountNum
            }).then(res=>{
                console.log(res.data);
                
            }).catch(err=> {
                console.log(err);
            })

            console.log("here " + response);
            
        

        setAmountNum(0);

        
    }

    return (
        <div>
            <h1 className='EXH1'>
                New Expense
            </h1>
            <h2 className='EXH2'>
                Add new expense!
            </h2>
            <Form onSubmit={onSubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control className="PD_FormInputs" type="text" placeholder="Product Name" />
                    <Form.Text className="text-muted">
                        Enter the name of your expense product's name
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price Amount</Form.Label>
                    <Form.Control type="number" placeholder="12.99" value={amountNum} onChange={(e) => setAmountNum(e.target.value)}></Form.Control>
                    <Form.Text className="text-muted">
                        Enter the price of the item
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Expense Type</Form.Label>
                    <Form.Select aria-label="Default select example" >
                        <option>Food</option>
                        <option>Apparel</option>
                        <option>Housing</option>
                        <option>Misc</option>
                    </Form.Select>
                    <Form.Text className="text-muted">
                        Select Expense Type
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default NewEx;