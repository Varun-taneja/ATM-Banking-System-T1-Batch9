import React, { useState, useEffect } from "react";
import Snavbar from "../components/Snavbar";
import "../Div.css"
import SearchBar from "../components/Searchbar";
import axios from "axios";
import CashWithdraw from "../components/CashWithdraw";
function CashWithdrawing(){

    // const [accountNumber, setAccountNumber] = useState()
    // const [accountBalance, setAccountBalance ] = useState()

 
    //   const getBalByAccntNo = (event) => {
    //     axios
    //       .get("http://localhost:30140/api/Balance/GetBalance/" + accountNumber)
    //       .then((response) => {
    //         //(response.data);
    //         console.log(response.data);
    //         setAccountNumber(response.data.accountNumber);
    //         setAccountBalance(response.data.accountBalance);

    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    
    //     event.preventDefault();
    //   };
    return (
        <div className='rowC'>
            <Snavbar />
            <div className='colnC'>
              <h1 className="titleC">Cash Withrawal</h1>
                <div className='searchC'><SearchBar/></div>
                <div className='padd'> 
                  <CashWithdraw />
                </div>
            </div>
        </div>
    )
}

export default CashWithdrawing;