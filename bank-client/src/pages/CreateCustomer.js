import React, { useState } from "react";
import Snavbar from '../components/Snavbar'
import "../Div.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import Nform from "../components/Nform";
// import Searchbar from '../components/Searchbar';
const axios = require('axios').default;

function CreateCustomer(){
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState();
    const [custId, setCustId] = useState();
    const [accountNumber, setAccountNumber] = useState();
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState();
    const [state, setState] = useState("");
    const [city, setCity] = useState("");

    async function handleSubmit(e) {
        const data = {
            email,
            contact,
            custId,
            accountNumber,
            address,
            pincode,
            state,
            city
        }
        e.preventDefault()

        // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        //     return alert("Passwords do not match")
        // }

        try {
            console.log(data)
            const res = await axios.post('', data,{ 
                headers: {'Content-Type': 'application/json'}})
            console.log(res)
            
        } catch (err) {
            // alert(err.message.substring(
            //     err.message.indexOf(":") + 1,
            //     err.message.lastIndexOf("(")))
        }

        // setLoading(false)
    }

    return (
        <div className='rowC'>
            <Snavbar />
            <div className='colnC'>
                <div className="formC">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridContact">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="Contact" placeholder="xxxxxxxxxx"  value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCustomerId">
                            <Form.Label>Customer ID</Form.Label>
                            <Form.Control type="" placeholder="xxxxxxxxxx" value={custId} onChange={(e)=>{setCustId(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAccountNo">
                            <Form.Label>Account Number</Form.Label>
                            <Form.Control type="Contact" placeholder="xxxxxxxxxx" value={accountNumber} onChange={(e)=>{setAccountNumber(e.target.value)}}/>
                            </Form.Group>
                        </Row>
                            
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Full Address" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control value={state} onChange={(e)=>{setState(e.target.value)}}/>
                            </Form.Group>

                            {/* <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                            </Form.Select>
                            </Form.Group> */}

                            <Form.Group as={Col} controlId="formGridPincode">
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control value={pincode} onChange={(e)=>{setPincode(e.target.value)}} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                        </Form>
                </div>
            </div>
            {/* <h1>Add/Edit Customer Details</h1> */}
        </div>
    )
}

export default CreateCustomer;