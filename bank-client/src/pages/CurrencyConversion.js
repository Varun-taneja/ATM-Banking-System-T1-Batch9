
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

 
function CurrencyConversion({token}){
    const [searchValue, setSearchValue] = useState();
    const [accountBalance, setAccountBalance] = useState();
    const [accountNumber, setAccountNumber] = useState();
    const [convertedBalance, setConvertedBalance] = useState();
    const [curr, setCurr] = useState('INR');
    const [view, setView] = useState(false);
    const [rates, setRates] = useState();

    useEffect(() => {
        const access_key = "49a07223fe9df9ab6d764b65fe83c7fc";
        axios.get(`http://data.fixer.io/api/latest?access_key=${access_key}`)
            .then((response) => {
                setRates(response.data.rates);
            })
            .catch(err => {
                console.log(err);
            })
    },[])
    

    const getBalByAccntNo = (event) => {
        axios
          .get("http://localhost:30140/api/Balance/GetBalance/" + searchValue, {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((response) => {
            //(response.data);
            console.log(response.data);
            setAccountNumber(response.data.accountNumber);
            setAccountBalance(response.data.accountBalance);

          })
          .catch((error) => {
            console.log(error);
          });
    
        event.preventDefault();
    };

    const getConvertedCurrency = (event) => {
        event.preventDefault();
        console.log(accountBalance);
        setConvertedBalance(accountBalance * (rates[curr] / rates["INR"]));
    }


    return (
        <div className='rowC'>
              <ToastContainer/>
                <Snavbar />
                <div className='colnC'>
                <div className="rowC">
                    {/* <h1 className="titleC">Convert your Currency</h1> */}
                    <div className='searchC'><SearchBar searchValue={searchValue} setSearchValue={setSearchValue} submitSearch={getBalByAccntNo}/></div>
                </div>
                
                    <div className=''> 
                        <Container>
                            <Row className="vh-100 d-flex justify-content-center align-items-center">
                                <Col md={10} lg={8} xs={12}>
                                <div className="border border-3 border-dark"></div>
                                <Card className="shadow">
                                    <Card.Body>
                                    <div className="mb-3 mt-4">
                                        <h2 className="fw-bold mb-2 text-uppercase">CONVERT CURRENCY</h2>
                                        <p className=" mb-2">PLEASE ENTER THE ACCOUNT NUMBER ABOVE</p>
                                        <Form>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} className="mb-3" controlId="amount1">
                                            <Form.Label>Balance in INR</Form.Label>
                                            <Form.Control type="number" placeholder="Balance" value={accountBalance}/>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} className="mb-3" controlId="amount2">
                                            <Form.Label>Balance in {curr}</Form.Label>
                                            <Form.Control type="number" placeholder="Balance" value={convertedBalance}/>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-1">
                                            <Form.Group as={Col} className="mb-3" controlId="amount2">
                                            <Form.Label>Set your currency</Form.Label>
                                            <Form.Control type="text" placeholder="XXX" value={curr} maxLength={3} onChange={e => setCurr(e.target.value)}/>
                                            </Form.Group>
                                        </Row>
                                        <br></br>
                                        <div className="d-grid">
                                            <select className="mb-3" value={curr} onChange={e => setCurr(e.target.value)}>
                                                <option value="INR">INR</option>
                                                <option value="USD">USD</option>
                                                <option value="GBP">GBP</option>
                                                <option value="JPY">JPY</option>
                                                <option value="BTC">BTC</option>
                                            </select>
                                            <Button variant="dark" type="button" onClick={getConvertedCurrency}>
                                            Convert Balance
                                            </Button>
                                        </div>
                                        <br></br>
                                        {/* <div className="d-grid">
                                            <Button variant="dark" type="button" disabled={flag} onClick={handleTransfer}>
                                            Transfer
                                            </Button>
                                        </div> */}
                                        </Form>
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

export default CurrencyConversion;