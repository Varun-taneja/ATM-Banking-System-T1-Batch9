import React, {useState} from 'react';
import Snavbar from '../components/Snavbar'
import "../Div.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Nform from '../components/Nform';
import Searchbar from '../components/Searchbar';
import { useNavigate } from 'react-router';
import axios from 'axios'
function AddCustomerDetails({customerData}) {
    const [name, setName] = useState(customerData.customerName);
    const [email, setEmail] = useState(customerData.email);
    const [contact, setContact] = useState(customerData.contact);
    const [custId, setCustId] = useState(customerData.customerID);
    const [accountNumber, setAccountNumber] = useState(customerData.accountNumber);
    const [address, setAddress] = useState(customerData.address);
    const [pincode, setPincode] = useState(customerData.pincode);

    const navigate = useNavigate();
    

    

    const sendPutRequest = async (e) => {
       e.preventDefault();
        try {
            const updatedCustomer = {
                email,
                contact,
                customerID:parseInt(custId),
                accountType:"Savings",
                customerName:name,
                accountNumber:parseInt(accountNumber),
                address,
                pincode:parseInt(pincode),
            };
            console.log(updatedCustomer);
            const resp = await axios.put('http://localhost:30140/api/Customer/EditCustomer', updatedCustomer);
            console.log(resp.data);
            navigate('/view-customer');
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    
    

    // const sendRequest = async () => {
    //     try {
    //         const resp = await axios({
    //             method: 'PUT',
    //             url: '',
    //             data: {
    //                 id: 1,
    //                 userId: 1,
    //                 title: 'A new title',
    //                 body: 'Update this post'
    //             }
    //         });

    //         console.log(resp.data);
    //     } catch (err) {
    //         // Handle Error Here
    //         console.error(err);
    //     }
    // }


    return (
        <div className='rowC'>
            <Snavbar />
            <div className='colnC'>
                <h1 className='titleC'>Edit/Add Customer Details</h1>
                <div className="formC">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Your Full Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                            </Form.Group>

                            {/* <Form.Group as={Col} controlId="formGridContact">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="Contact" placeholder="xxxxxxxxxx"  value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
                            </Form.Group> */}
                        </Row>
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
                            <Form.Control type="Contact" placeholder="xxxxxxxxxx" value={accountNumber} onChange={(e)=>{setAccountNumber((e.target.value))}}/>
                            </Form.Group>
                        </Row>
                            
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Full Address" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                        </Form.Group>

                        <Row className="mb-3">
                        

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

                        <Button variant="primary" type="button" onClick={sendPutRequest}>
                            Edit Details
                        </Button>
                        </Form>
                </div>
            </div>
            {/* <h1>Add/Edit Customer Details</h1> */}
        </div>
    )
}

export default AddCustomerDetails;