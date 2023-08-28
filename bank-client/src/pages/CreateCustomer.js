import React, { useState } from "react";
import Snavbar from '../components/Snavbar'
import "../Div.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import Nform from "../components/Nform";
// import Searchbar from '../components/Searchbar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreateCustomer({token, isToggled, setIsToggled}){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [custId, setCustId] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");

    async function handleSubmit(e) {
        let msg ="";
       
        if(pincode === "" || pincode.length !== 6 || !(/^\d+$/.test(pincode))){
            msg = "Pincode of 8 digits required"
        }

        if(address === ""){
            msg = "Address is Required"
        }
        if(accountNumber === "" || accountNumber.length !== 8 || !(/^\d+$/.test(accountNumber))){
            msg = "Account Number of 8 digits required"
        }

        if(custId === "" || custId.length !== 8 || !(/^\d+$/.test(custId))){
            msg = "Customer ID of 8 digits required"
        }

        if(email ==="" || !(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email))){
            msg = "Valid Email is required"
        }

        if(contact === "" || contact.length !== 10 || !(/^\d+$/.test(contact))){
            msg = "Contact of 10 digits required"
        }
        if(!(/^[a-z]+$/i.test(name))){
            msg = "Name should only contain alphabets";
        }
         if(name === ""){
            msg = "Name Field is Required";
        }

        if(msg !== ""){
            return toast.warning(msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        
        const data = {
            email,
            contact,
            customerID:parseInt(custId),
            accountType:"Savings",
            customerName:name,
            accountNumber:parseInt(accountNumber),
            address,
            pincode:parseInt(pincode),
            
        }
        e.preventDefault()

        // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        //     return alert("Passwords do not match")
        // }

        try {
            console.log(data)
            const res = await axios.post('http://localhost:30140/api/Customer/AddCustomer', data,{ 
                headers: {'Content-Type': 'application/json',  Authorization: `Bearer ${token}`}})
            console.log(res)
            toast.success(`Customer has been created!!`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            setCustId("");
            setName("")
            setEmail("")
            setPincode("")
            setAddress("")
            setAccountNumber("")
            setContact("")

            
        } catch (err) {
            console.log(err);
        }

        // setLoading(false)
    }

    return (
        <div className='rowC'>
            <Snavbar isToggled={isToggled} setIsToggled={setIsToggled}/>
            <ToastContainer/>
            <div className='colnC'>
            <h1 className='titleC'>Create Customer</h1>
                <div className="formC">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Your Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                            </Form.Group>
                            
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridContact">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="Contact" placeholder="xxxxxxxxxx"  value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            </Form.Group>

                            {/* <Form.Group as={Col} controlId="formGridContact">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="Contact" placeholder="xxxxxxxxxx"  value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
                            </Form.Group> */}
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCustomerId">
                            <Form.Label>Customer ID</Form.Label>
                            <Form.Control type="" placeholder="xxxxxxxxxx" value={custId} onChange={(e)=>{setCustId(e.target.value)}}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAccountNo">
                            <Form.Label>Account Number</Form.Label>
                            <Form.Control type="Contact" placeholder="xxxxxxxxxx" value={accountNumber} onChange={(e)=>{setAccountNumber((e.target.value))}}/>
                            </Form.Group>
                        </Row>
                            
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Full Address" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                        </Form.Group>

                        <Row className="mb-3">
                            {/* <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                            </Form.Group> */}

                            {/* <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control value={state} onChange={(e)=>{setState(e.target.value)}}/>
                            </Form.Group> */}

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

                        <Button variant="primary" type="button" onClick={handleSubmit}>
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