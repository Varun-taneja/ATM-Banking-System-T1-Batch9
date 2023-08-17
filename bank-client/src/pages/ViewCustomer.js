import React from 'react';
import Snavbar from '../components/Snavbar';
import "../Div.css"
import SearchBar from '../components/Searchbar';
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';




function ViewCustomer({ token, setCustomerData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [custId, setCustId] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [flag,setFlag]= useState(false);

  const navigate = useNavigate();


  const getCustById = (event) => {
    event.preventDefault();
    axios
      .get("http://localhost:30140/api/Customer/GetCustomer/" + searchValue, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        //(response.data);
        setCustomerData(response.data);
        setFlag(true);
        console.log(searchValue);
        console.log(response.data);
        setName(response.data.customerName);
        setEmail(response.data.email);
        setContact(response.data.contact);
        setCustId(response.data.customerID);
        setAccountNumber(response.data.accountNumber);
        setAddress(response.data.address);
        setPincode(response.data.pincode);
        setState(response.data.state);
        setCity(response.data.city);

      })
      .catch((error) => {
        console.log(error);
      });

    //event.preventDefault();
  };

  const editCustomer = () => {

    navigate('/edit-customer-details')
  }

  return (
    <div className='rowC'>
      <Snavbar />

      <div className='colnC'>
        <div className='rowC'>
          <h1 className='titleC'>View Customer Details</h1>
          <div className='searchC'><SearchBar searchValue={searchValue} setSearchValue={setSearchValue} submitSearch={getCustById} /></div>
        </div>
        
        {/* <button onClick={getCustById} style={{ margin: "10px" }}>
                  Search
                </button> */}
        <div style={{marginRight:"0.2em",display: flag?'block':'none'}}>
          <MDBTable bordered>
            <MDBTableHead>
              <tr className='table-dark'>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Customer ID</th>
                <th scope="col">Account Number</th>
                <th scope="col">Address</th>
                <th scope="col">Pincode</th>
                <th scope="col">Edit</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
            <tr>
              <td scope='row'>{name}</td>
              <td>{email}</td>
              <td>{contact}</td>
              <td>{custId}</td>
              <td>{accountNumber}</td>
              <td>{address}</td>
              <td>{pincode}</td>
              <td><Button onClick={editCustomer}>Edit</Button></td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      

      </div>

    </div>
  )
}

export default ViewCustomer;
