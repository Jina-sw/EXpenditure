import './Program.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

const EditEx = () => {

  

    const [input, setInput] = useState("");
    const [newAmount, setNewAmount] = useState(0);
    const [newType, setNewType] = useState("");

    const onChangeOption = (e) => {
        setNewType(e.target.value);
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        const response = await axios.post("http://localhost:5000/expenses", {
            amount: newAmount,
            title: input,
            type: newType,
            
        }).then(res => {
            if(res.data.message == "updated"){
                alert("Successfully Edited!");
            }else{
                alert(res.data.message);
            }
            // console.log(res.data.message);
        }).catch(err => {
            console.log(err);
        })

        console.log(response);

        setNewAmount(0);
        setInput("");
        setNewType("");

    }
    
    return (
        <div>
            <h1 className='EXH1'>
                Edit Expenses
            </h1>
            <h2 className='EXH2'>
                Make sure to enter the correct product name and edit price and type of the expense.
            </h2>
            <br/>
            <Form onSubmit={onSubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control className="PD_FormInputs" type="text" placeholder="Product Name" value={input}
                    onChange={(e)=>setInput(e.target.value)} />
                    <Form.Text className="text-muted">
                        Enter the name of your expense product's name
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price Amount</Form.Label>
                    <Form.Control type="number" placeholder="12.99" value={newAmount} onChange={(e)=>setNewAmount(e.target.value)} />
                    <Form.Text className="text-muted">
                        Enter the price of the item
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Expense Type</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={onChangeOption} >
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
};

export default EditEx;