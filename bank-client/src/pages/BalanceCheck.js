import React, { useState, useEffect } from "react";
import Snavbar from "../components/Snavbar";
import "../Div.css"
import SearchBar from "../components/Searchbar";
import axios from "axios";
function BalanceCheck(){

    const [accountNumber, setAccountNumber] = useState()
    const [accountBalance, setAccountBalance ] = useState()

 
      const getBalByAccntNo = (event) => {
        axios
          .get("http://localhost:30140/api/Balance/GetBalance/" + accountNumber)
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
    return (
        <div className='rowC'>
            <Snavbar />
            <div className='colnC'>
                <div className='searchC'><SearchBar/></div>
                <h1 className="padd">Customer Balance Details</h1>
                <table className="table table-bordered">
                    <tr>
                    <th>Account Number</th>
                    <th>Account Balance</th>
                    </tr>
                    {/* {data.map((d) => ( */}
                    <tr>
                        <td>{accountNumber}</td>
                        <td>{accountBalance}</td>
                        
                    </tr>
                    {/* ))} */}
                </table>
            </div>
        </div>
    )
}

export default BalanceCheck;