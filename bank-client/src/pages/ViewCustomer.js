import React from 'react';
import Snavbar from '../components/Snavbar';
import "../Div.css"
import SearchBar from '../components/Searchbar';
import { useState, useEffect } from "react";
import axios from "axios";

function ViewCustomer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState();
    const [custId, setCustId] = useState();
    const [accountNumber, setAccountNumber] = useState();
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState();
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const[searchValue,setSearchValue]= useState("");


  
      const getCustById = (event) => {
        axios
          .get("http://localhost:30140/api/Customer/GetCustomer/" + searchValue)
          .then((response) => {
            //(response.data);
            console.log(searchValue);
            console.log(response.data);
            setName(response.data.name);
            setEmail(response.data.email);
            setContact(response.data.contact);
            setCustId(response.data.custId);
            setAccountNumber(response.data.accountNumber);
            setAddress(response.data.address);
            setPincode(response.data.pincode);
            setState(response.data.state);
            setCity(response.data.city);

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
                <div className='searchC'><SearchBar searchValue={searchValue} setSearchValue={setSearchValue} submitSearch={getCustById}/></div>
                <button onClick={getCustById} style={{ margin: "10px" }}>
                Search
              </button>
                <h1 className='padd'>View Customer Details</h1>
                <table className="table table-bordered">
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Customer ID</th>
                    <th>Account Number</th>
                    <th>Address</th>
                    <th>Pincode</th>
                    <th>State</th>
                    <th>City</th>
                    </tr>
                    {/* {data.map((d) => ( */}
                    <tr>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{contact}</td>
                        <td>{custId}</td>
                        <td>{accountNumber}</td>
                        <td>{address}</td>
                        <td>{pincode}</td>
                        <td>{state}</td>
                        <td>{city}</td>
                    </tr>
                    {/* ))} */}
                </table>
            </div>
        
    </div>
    )
}

export default ViewCustomer;