import React from 'react';
import Snavbar from '../components/Snavbar';
import "../Div.css"
import SearchBar from '../components/Searchbar';
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



function TransactionDetails({ token, setCustomerData }) {
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
  const [accNo, setAccNo] = useState("")
  const [flag, setFlag] = useState(false);

  const [startDate, setStartDate] = useState(new Date("2023/08/08"));
  const [endDate, setEndDate] = useState(new Date("2023/08/10"));

  //   const navigate = useNavigate();

  const filterDate = (event) => {
    event.preventDefault();
    const startPeriod = new Date(startDate.getTime() + (5.5*60*60*1000));
    const endPeriod = new Date(endDate.getTime() + (5.5*60*60*1000));
    const filterData = {

      accountNumber: parseInt(accNo),
      startPoint: startPeriod.toISOString(),
      endPoint: endPeriod.toISOString()
    }
    console.log(endDate)
    console.log(filterData);
    axios
      .post("http://localhost:30140/api/Transaction/GetTransactionsForPeriod" ,filterData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        console.log(response.data);
        setStatementData(response.data.reverse());
        setSearchValue("")
        setFlag(true);
      })
      .catch((error) => {
        console.log(error);
      });

    //event.preventDefault();
  };

  const getCustById = (event) => {
    event.preventDefault();
    
    axios
      .get("http://localhost:30140/api/Transaction/GetAllTransactions/"+ searchValue, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        console.log(response.data);
        setStatementData(response.data.reverse());
        setAccNo(searchValue)
        setSearchValue("")
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

          <h1 className='titleC' style={{paddingLeft: "0.2em"}}>Transaction History for Account {accNo}</h1>
          <div className='searchC'><SearchBar searchValue={searchValue} setSearchValue={setSearchValue} submitSearch={getCustById} /></div>
        </div>


        <div style={{ marginRight: "0.2em", display: flag ? 'block' : 'none' }}>
          <div className='mb-2'>
            From: 
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              showTimeSelect
              className='me-1'
            />
            To:
            <DatePicker
            className='ms-1'
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              showTimeSelect
            />
            <Button type='button' className="ms-2" onClick={filterDate}>Filter</Button>
          </div >
          <MDBTable bordered>
            <MDBTableHead>
              <tr className='table-dark'>
                <th scope="col">Date</th>
                <th scope="col">Transaction ID</th>
                <th scope="col">Remarks</th>
                <th scope="col">Amount</th>
                <th scope="col">Balance</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {statementData ? statementData.map((d) => {
                if (d.fromAccountNumber == accNo) {
                  return (<tr>
                    <td scope='row'>{new Date(d.transactionTime).toLocaleString()}</td>
                    <td>{d.transactionId}</td>
                    <td>{d.toAccountNumber ? `Transfered to Acc No: ${d.toAccountNumber}` : "Cash Withdrawl"}</td>
                    <td style={{ color: "red" }}>{`INR. ${d.amount}`}</td>
                    <td>{`INR. ${d.fromAccountBalance}`}</td>
                  </tr>)
                }
                if (d.toAccountNumber == accNo) {
                  return (<tr>
                    <td scope='row'>{new Date(d.transactionTime).toLocaleString()}</td>
                    <td>{d.transactionId}</td>
                    <td>{d.fromAccountNumber ? `Received from Acc No: ${d.fromAccountNumber}` : "Cash Deposit"}</td>
                    <td style={{ color: "green" }}>{`INR. ${d.amount}`}</td>
                    <td>{`INR. ${d.toAccountBalance}`}</td>
                  </tr>)
                }

              }) : ""}

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

export default TransactionDetails;
