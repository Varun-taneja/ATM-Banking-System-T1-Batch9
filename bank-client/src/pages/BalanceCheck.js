import React, { useState, useEffect } from "react";
import Snavbar from "../components/Snavbar";
import "../Div.css"
import SearchBar from "../components/Searchbar";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function BalanceCheck({ token, isToggled, setIsToggled }) {

  const [accountNumber, setAccountNumber] = useState()
  const [accountBalance, setAccountBalance] = useState()
  const [searchValue, setSearchValue] = useState()
  const [flag, setFlag] = useState(false)

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
        setFlag(true);
      })
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
  };
  return (
    <div className='rowC'>
      <Snavbar isToggled={isToggled} setIsToggled={setIsToggled} />
      <div className='colnC'>
        <div className="rowC">
          <h1 className="titleC">Customer Balance Details</h1>
          <div className='searchC'><SearchBar searchValue={searchValue} setSearchValue={setSearchValue} submitSearch={getBalByAccntNo} /></div>
        </div>
        <div style={{ marginRight: "0.2em", display: flag ? 'block' : 'none' }}>
          <MDBTable bordered>
            <MDBTableHead>
              <tr className='table-dark'>
                <th scope="col">Account number</th>
                <th scope="col">Balance</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td scope='row'>{accountNumber}</td>
                <td>{accountBalance}</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
       
      </div>
    </div>
  )
}

export default BalanceCheck;