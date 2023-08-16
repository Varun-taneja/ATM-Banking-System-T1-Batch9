import React from "react";
import Snavbar from '../components/Snavbar'
import "../Div.css"
import SearchBar from "../components/Searchbar";
import axios from 'axios';
import { useState, useEffect } from "react";

function TransactionDetails(){
    const [type, setType] = useState("");
    const [cardNumber, setCardNumber] = useState();
    const [region, setRegion] = useState("");
    const [amount, setAmount] = useState();
    const [accountNumber, setAccountNumber] = useState();
    const [transactionTime, setTransactionTime] = useState();
    const[searchValue,setSearchValue]= useState("");
    
    
      const getTransByAccntNo = (event) => {
        event.preventDefault();
        axios
          .get("http://localhost:30140/api/Transaction/GetTransactions/" + accountNumber)
          .then((response) => {
            //(response.data);
            console.log(response.data);
            setType(response.data.type);
            setCardNumber(response.data.cardNumber);
            setRegion(response.data.region);
            setAmount(response.data.amount);
            setAccountNumber(response.data.accountNumber);
            setTransactionTime(response.data.transactionTime);
          })
          .catch((error) => {
            console.log(error);
          });
    
        
      };
    return (
        <div className='rowC'>
            <Snavbar />
            <div className='colnC'>
                <div className='searchC'><SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/></div>
                <h1 className="padd">Customer Transaction Details</h1>
                <table className="table table-bordered">
                    <tr>
                    <th>Type</th>
                    <th>Card Number</th>
                    <th>Region</th>
                    <th>Amount</th>
                    <th>Account Number</th>
                    <th>transaction Time</th>
                    </tr>
                    {/* {data.map((d) => ( 
                    <tr>
                        <td>{type}</td>
                        <td>{cardNumber}</td>
                        <td>{region}</td>
                        <td>{amount}</td>
                        <td>{accountNumber}</td>
                        <td>{transactionTime}</td>
                    </tr>
                     ))}  */}
                </table>
            </div>
        </div>
    )
}

export default TransactionDetails;