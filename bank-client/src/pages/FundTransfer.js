
import React, { useState, useEffect } from "react";
import Snavbar from "../components/Snavbar";
import "../Div.css"
import SearchBar from "../components/Searchbar";
import axios from "axios";
import {
  InputGroup,
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
} from "react-bootstrap";

function FundTransfer({token}){
    const [senderaccountnumber, setSenderAccountNumber] = useState();
    const [receiveraccountnumber, setReceiverAccountNumber] = useState();
    const [amount, setAmount] = useState();
    const [balance, setBalance] = useState();
    const [flag, setFlag] = useState(true);

    const getBalById = (event) => {
        event.preventDefault();
        axios
          .get("http://localhost:30140/api/Balance/GetBalance/" + senderaccountnumber, {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((response) => {
            //(response.data);
            // setCustomerData(response.data)-
            console.log(senderaccountnumber);
            console.log(response.data);
            setBalance(response.data.accountBalance);    
          })
          .catch((error) => {
            console.log(error);
          });
          if(balance>amount){
            setFlag = false;
            return;
          }
          alert(`INR ${balance} is your current balance which is less than the amount you wish to transfer`)
          
        //event.preventDefault();
      };

      const handleTransfer = (event) => {
        event.preventDefault();
        const transactionDetails ={
            FromAccountNumber: parseInt(senderaccountnumber),
            ToAccountNumber: parseInt(receiveraccountnumber),
            Amount: parseFloat(amount),
        }
        axios
          .put("http://localhost:30140/api/FundTransfer/FundTransfer", transactionDetails,
           {headers: { Authorization: `Bearer ${token}` }}
          )
          .then((response) => {
            //(response.data);
            // setCustomerData(response.data)-
            console.log(senderaccountnumber);
            console.log(response.data);   
          })
          .catch((error) => {
            console.log(error);
          });
          alert(`INR ${amount} has been transferred`)
          
        //event.preventDefault();
      };

    return (
        <div className='rowC'>
                <Snavbar />
                <div className='colnC'>
                {/* <div className="rowC">
                    <h1 className="titleC">Fund Transfer</h1>
                    <div className='searchC'><SearchBar/></div>
                </div> */}
                
                    <div className='padd'> 
                        <Container>
                            <Row className="vh-100 d-flex justify-content-center align-items-center">
                                <Col md={10} lg={8} xs={12}>
                                <div className="border border-3 border-dark"></div>
                                <Card className="shadow">
                                    <Card.Body>
                                    <div className="mb-3 mt-4">
                                        <h2 className="fw-bold mb-2 text-uppercase">TRANSFER FUNDS</h2>
                                        <p className=" mb-5">PLEASE ENTER THE SENDER AND RECEIVER DETAILS BELOW</p>
                                        <Form>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} className="mb-3" controlId="sender">
                                            <Form.Label className="text-center">
                                                Sender A/C No.
                                            </Form.Label>
                                            <Form.Control type="number" placeholder="Sender A/C No." value={senderaccountnumber} onChange={(e)=>{setSenderAccountNumber(e.target.value)}} />
                                            </Form.Group>

                                            <Form.Group as={Col} className="mb-3" controlId="receiver">
                                            <Form.Label>Receiver A/C No.</Form.Label>
                                            <Form.Control type="number" placeholder="Receiver A/C No." value={receiveraccountnumber} onChange={(e)=>{setReceiverAccountNumber(e.target.value)}} />
                                            </Form.Group>
                                        </Row>
                                        <p className=" mb-5"></p>
                                        <p className=" mb-5">PLEASE ENTER THE AMOUNT TO BE SENT BELOW</p>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} className="mb-3" controlId="amount">
                                            <Form.Label>Amount</Form.Label>
                                            <Form.Control type="number" placeholder="Amount to be sent" value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
                                            </Form.Group>
                                        </Row>
                                        <br></br>
                                            <div className="d-grid">
                                            <Button variant="dark" type="button" onClick={getBalById}>
                                            Check Balanace
                                            </Button>
                                            </div>
                                        <br></br>
                                        <div className="d-grid">
                                            <Button variant="dark" type="button" disabled={flag} onClick={handleTransfer}>
                                            Transfer
                                            </Button>
                                        </div>
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

export default FundTransfer;