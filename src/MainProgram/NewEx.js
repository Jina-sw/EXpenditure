import './Program.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';

const NewEx = () => {

    const [typeOp, setTypeOp] = useState("Food");
    
    const [amountNum, setAmountNum] = useState(0);
    const [name, setName] = useState("");

    const onChangeOption = (e) => {
        console.log(e.target.value);
    }
    
    const onSubmitForm = async (e) => {
        console.log(amountNum);
        e.preventDefault();
     
       
            
        const response = await axios.post("http://localhost:5000/expenses", {
                amount: amountNum,
                title: name,
                type: typeOp
            }).then(res=>{
                console.log(res.data);
                
            }).catch(err=> {
                console.log(err);
            })

            console.log("here " + response);
            
        

        setAmountNum(0);
        setName("");
        setTypeOp("");
        
    }

    return (
        <div>
            <h1 className='EXH1'>
                New Expense
            </h1>
            <h2 className='EXH2'>
                Add new expense!
            </h2>
            <br/>
            <Form onSubmit={onSubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="t">Product Name</Form.Label>
                    <Form.Control className="PD_FormInputs" type="text" placeholder="Product Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <Form.Text className="text-muted">
                        Enter the name of your expense product's name
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="t">Price Amount</Form.Label>
                    <Form.Control type="number" placeholder="12.99" value={amountNum} onChange={(e) => setAmountNum(e.target.value)}></Form.Control>
                    <Form.Text className="text-muted">
                        Enter the price of the item
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label className="t">Expense Type</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={onChangeOption} >
                        <option value="Food">Food</option>
                        <option value="apparel">Apparel</option>
                        <option value="Housing">Housing</option>
                        <option value="Misc">Misc</option>
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