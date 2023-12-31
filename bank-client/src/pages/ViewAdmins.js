import React from 'react';
import Snavbar from '../components/Snavbar';
import "../Div.css"
import SearchBar from '../components/Searchbar';
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ViewAdmins({ token, setCustomerData, isToggled, setIsToggled }) {
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
  const [adminData, setAdminData] = useState();
  const [flag,setFlag]= useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    axios
    .get("http://localhost:30140/api/auth/GetAdmins/", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((response) => {
      //(response.data);
      setAdminData(response.data);
      setFlag(true);
      console.log(searchValue);
      console.log(response.data);
      

    })
    .catch((error) => {
      console.log(error);
      toast.error(error.response.data, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    });
  },[])

  const toggleAdmin = (event) => {
    event.preventDefault();
    console.log(event.target.id)
    console.log(token)
    axios
      .put("http://localhost:30140/api/auth/ToggleAdmin/" + event.target.id,{}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        //(response.data);
        setAdminData((adminData)=>adminData.map((admin)=>{
          if(admin.id == event.target.id){
            admin.enable = response.data.enable
          }
          return admin;
        }))

      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      });

    //event.preventDefault();
  };

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
        toast.error(error.response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      });

    //event.preventDefault();
  };

  const editCustomer = () => {

    navigate('/edit-customer-details')
  }

  return (
    <div className='rowC'>
      <Snavbar isToggled={isToggled} setIsToggled={setIsToggled}/>
      <ToastContainer />
      <div className='colnC'>
        <div className='rowC'>
          <h1 className='titleC'>View Admin Details</h1>
          <div className='searchC'><SearchBar searchValue={searchValue} setSearchValue={setSearchValue} submitSearch={getCustById} /></div>
        </div>
        
        {/* <button onClick={getCustById} style={{ margin: "10px" }}>
                  Search
                </button> */}
        <div style={{marginRight:"0.2em",display: flag?'block':'none'}}>
          <MDBTable bordered>
            <MDBTableHead>
              <tr className='table-dark'>
                <th scope="col">Employee ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Change Status</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
            {adminData?adminData.map((admin)=>(
                <tr>
                    <td scope='row'>{admin.id}</td>
                    <td>{admin.email}</td>
                    <td>{admin.name}</td>
                    <td style={{color:`${admin.enable?"green":"red"}`}}>{admin.enable?"Enabled":"Disabled"}</td>
                    <td><Button onClick={toggleAdmin} id={admin.id}>{admin.enable?"Disable":"Enable"}</Button></td>
                </tr>
            )):''}
            
            </MDBTableBody>
          </MDBTable>
        </div>
      

      </div>

    </div>
  )
}

export default ViewAdmins;
