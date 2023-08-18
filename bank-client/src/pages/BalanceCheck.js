import React, { useState, useEffect } from "react";
import Snavbar from "../components/Snavbar";
import "../Div.css"
import SearchBar from "../components/Searchbar";
import axios from "axios";
function BalanceCheck({token}){

    const [accountNumber, setAccountNumber] = useState()
    const [accountBalance, setAccountBalance ] = useState()
    const [searchValue, setSearchValue] = useState()

 
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
    return (
        <div className='rowC'>
            <Snavbar />
            <div className='colnC'>
              <div className="rowC">
                <h1 className="titleC">Customer Balance Details</h1>
                <div className='searchC'><SearchBar searchValue={searchValue} setSearchValue={setSearchValue} submitSearch={getBalByAccntNo}/></div>
              </div>
              
                <div className='padd'> 
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
        </div>
    )
}

export default BalanceCheck;