import React from 'react';
import Snavbar from '../components/Snavbar'
import "../Div.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Nform from '../components/Nform';
import Searchbar from '../components/Searchbar';
const axios = require('axios').default;
function AddCustomerDetails() {
    // const emailRef = useRef()
    // const contactRef = useRef()
    // const addressRef = useRef()
    // const pincodeRef = useRef()
    // const NameRef = useRef()
    // const accountNumRef = useRef()
    // const custIdRef = useRef()
    // const accountType = useRef()
    // const [loading, setLoading] = useState(false)
    // const navigate = useNavigate()

    

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
                <div className='searchC'><Searchbar/></div>
                <div className="formC">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridContact">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="Contact" placeholder="xxxxxxxxxx" />
                            </Form.Group>
                        </Row>
                            
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Full Address" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
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
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPincode">
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                </div>
            </div>
            {/* <h1>Add/Edit Customer Details</h1> */}
        </div>
    )
}

export default AddCustomerDetails;