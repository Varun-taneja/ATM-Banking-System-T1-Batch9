
import React, { useState, useEffect } from "react";
import Snavbar from "../components/Snavbar";
import "../Div.css"
import SearchBar from "../components/Searchbar";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  InputGroup,
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
} from "react-bootstrap";

function PinChange({token, isToggled, setIsToggled}){

    const [oldPin, setOldPin] = useState();
    const [newPin, setNewPin] = useState();
    const [confirmNewPin, setConfirmNewPin] = useState();
    const [custId, setCustId] = useState();


    // const getBalById = (event) => {
    //     event.preventDefault();
    //     axios
    //       .get("http://localhost:30140/api/Balance/GetBalance/" + senderaccountnumber, {
    //         headers: { Authorization: `Bearer ${token}` }
    //       })
    //       .then((response) => {
    //         //(response.data);
    //         // setCustomerData(response.data)-
    //         console.log(senderaccountnumber);
    //         console.log(response.data);
    //         setBalance(response.data.accountBalance);    
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //       if(balance>amount){
    //         setFlag = false;
    //         return;
    //       }
    //       alert(`INR ${balance} is your current balance which is less than the amount you wish to transfer`)
          
    //     //event.preventDefault();
    //   };

      const handleChequeDeposit = (event) => {
        event.preventDefault();
        if(newPin !== confirmNewPin){
            toast.warning(`Passwords do not match!`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return;
        }
        const pinDetails ={
            customerId: parseInt(custId),
            oldAccountPin: parseFloat(oldPin),
            newAccountPin: parseFloat(newPin),
        }
        console.log(pinDetails)
        axios
          .put("http://localhost:30140/api/Customer/ChangePin", pinDetails,
           {headers: { Authorization: `Bearer ${token}` }}
          )
          .then((response) => {
            //(response.data);
            // setCustomerData(response.data)-
            setCustId("")
            setOldPin("")
            setNewPin("")
            setConfirmNewPin("")
            toast.success(`PIN has been updated!!`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            console.log(response.data);  

          })
          .catch((error) => {
            const errObj = error.response.data;
            console.log(error);
            toast.error(errObj.errors?errObj[Object.keys(errObj)[0]][0]:"Old PIN is incorrect!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
          });
          
      };

    return (
        <div className='rowC'>
            <ToastContainer />
                <Snavbar isToggled={isToggled} setIsToggled={setIsToggled}/>
                <div className='colnC'>
                {/* <div className="rowC">
                    <h1 className="titleC">Fund Transfer</h1>
                    <div className='searchC'><SearchBar/></div>
                </div> */}
                
                    <div className='padd'> 
                        <Container>
                            <Row className="vh-40 d-flex justify-content-center align-items-center">
                                <Col md={8} lg={8} xs={12}>
                                <div className="border border-3 border-dark"></div>
                                <Card className="shadow">
                                    <Card.Body>
                                    <div className="mb-3 mt-3">
                                        <h2 className="fw-bold mb-3 text-uppercase align-center">Customer PIN CHANGE</h2>
                                        
                                        <Form>
                                        <Row className="mb-1">
                                            <Form.Group as={Col} className="mb-3" controlId="custId">
                                            <Form.Label>Customer ID</Form.Label>
                                            <Form.Control type="number" value={custId} onChange={(e)=>{setCustId(e.target.value)}}/>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-2">
                                            {/* <Form.Group as={Col} className="mb-3" controlId="sender">
                                            <Form.Label className="text-center">
                                                 A/C No.
                                            </Form.Label>
                                            <Form.Control type="number" placeholder="Sender A/C No." value={senderaccountnumber} onChange={(e)=>{setSenderAccountNumber(e.target.value)}} />
                                            </Form.Group> */}

                                            <Form.Group as={Col} className="mb-3" controlId="oldPin" >
                                            <Form.Label>Old PIN</Form.Label>
                                            <Form.Control type="password" maxLength="4" readonly onfocus="this.removeAttribute('readonly');" autocomplete="off" value={oldPin} onChange={(e)=>{setOldPin(e.target.value)}} />
                                            </Form.Group>
                                        </Row>
                                        {/* <p className=" mb-5"></p> */}
                                        <Row className="mb-2">
                                            <Form.Group as={Col} className="mb-3" controlId="newPin">
                                            <Form.Label>New PIN</Form.Label>
                                            <Form.Control type="password" maxLength="4" readonly onfocus="this.removeAttribute('readonly');" autocomplete="off" value={newPin} onChange={(e)=>{setNewPin(e.target.value)}}/>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-2">
                                            <Form.Group as={Col} className="mb-1" controlId="confirmNewPin">
                                            <Form.Label>Confirm New PIN</Form.Label>
                                            <Form.Control type="password" maxLength="4" readonly onfocus="this.removeAttribute('readonly');" autocomplete="off" value={confirmNewPin} onChange={(e)=>{setConfirmNewPin(e.target.value)}}/>
                                            </Form.Group>
                                        </Row>
                                        <br></br>
                                            <div className="d-grid">
                                            <Button variant="dark" type="button" onClick={handleChequeDeposit}>
                                            Update PIN
                                            </Button>
                                            </div>
                                        <br></br>
                                        {/* <div className="d-grid">
                                            <Button variant="dark" type="button" disabled={flag} onClick={handleTransfer}>
                                            Transfer
                                            </Button>
                                        </div> */}
                                        </Form>
                                        {/* <div className="mt-3">
                                        <p className="mb-0  text-center">
                                            Already have an account?{" "}
                                            <a href="{''}" className="text-primary fw-bold">
                                            Sign In
                                            </a>
                                        </p>
                                        </div> */}
                                    </div>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                            </Container>
                    </div>
                </div>
            </div>
        
    );
}

export default PinChange;