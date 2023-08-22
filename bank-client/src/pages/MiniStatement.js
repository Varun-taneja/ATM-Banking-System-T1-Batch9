import React from 'react';
import Snavbar from '../components/Snavbar';
import "../Div.css"
import SearchBar from '../components/Searchbar';
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';




function MiniStatement({ token, setCustomerData }) {
    //   const [name, setName] = useState("");
    //   const [email, setEmail] = useState("");
    //   const [contact, setContact] = useState();
    //   const [custId, setCustId] = useState();
    //   const [accountNumber, setAccountNumber] = useState();
    //   const [address, setAddress] = useState("");
    //   const [pincode, setPincode] = useState();
    //   const [state, setState] = useState("");
    //   const [city, setCity] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [statementData, setStatementData] = useState()
    const [accNo, setAccNo]=useState("")
    const [flag, setFlag] = useState(false);

    //   const navigate = useNavigate();


    const getCustById = (event) => {
        event.preventDefault();
        axios
            .get("http://localhost:30140/api/Transaction/GetTransactions/" + searchValue, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then((response) => {
                console.log(response.data);
                setStatementData(response.data.reverse());
                setAccNo(searchValue);
                setFlag(true);
            })
            .catch((error) => {
                console.log(error);
            });

        //event.preventDefault();
    };


    return (
        <div className='rowC'>
            <Snavbar />

            <div className='colnC'>
                <div className='rowC'>
                    <h1 className='titleC'>Mini statement for Account {accNo}</h1>
                    <div className='searchC'><SearchBar searchValue={searchValue} setSearchValue={setSearchValue} submitSearch={getCustById} /></div>
                </div>

                {/* <button onClick={getCustById} style={{ margin: "10px" }}>
                  Search
                </button> */}
                <div style={{ marginRight: "0.2em", display: flag ? 'block' : 'none' }}>
                    <MDBTable bordered>
                        <MDBTableHead>
                            <tr className='table-dark'>
                                <th scope="col">Date</th>
                                <th scope="col">Remarks</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Balance</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {statementData ? statementData.map((d) => {
                                if (d.fromAccountNumber == searchValue) {
                                    return (<tr>
                                        <td scope='row'>{d.transactionTime}</td>
                                        <td>{d.toAccountNumber?`Transfered to Acc No: ${d.toAccountNumber}`:"Cash Withdrawl"}</td>
                                        <td style={{color:"red"}}>{`INR. ${d.amount}`}</td>
                                        <td>{`INR. ${d.fromAccountBalance}`}</td>
                                    </tr>)
                                }
                                if (d.toAccountNumber == searchValue) {
                                    return (<tr>
                                        <td scope='row'>{d.transactionTime}</td>
                                        <td>{d.fromAccountNumber?`Received from Acc No: ${d.fromAccountNumber}`:"Cash Deposit"}</td>
                                        <td style={{color:"green"}}>{`INR. ${d.amount}`}</td>
                                        <td>{`INR. ${d.toAccountBalance}`}</td>
                                    </tr>)
                                }
                
                }):""}

                            {/* <td>{accountNumber}</td>
              <td>{address}</td>
              <td>{pincode}</td>
              <td><Button onClick={editCustomer}>Edit</Button></td> */}
                            {/* </tr> */}
                        </MDBTableBody>
                    </MDBTable>
                </div>


            </div>

        </div>
    )
}

export default MiniStatement;
